import { connectToDatabase } from '@/lib/mongo'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.API, // This is the default and can be omitted
})

const withApiAuthRequiredExtended = withApiAuthRequired as any
export const POST = withApiAuthRequiredExtended(
  async (request: NextRequest, response: NextResponse) => {
    const body = await request.json()
    const { command, style } = body as PostPrompt
    const { db } = await connectToDatabase()
    const session = await getSession(request, response)
    const user = session?.user
    if (!user) {
      return NextResponse.error()
    }
    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `make an image with the following command: ${command}. It has to be in the choosen style which is ${style}`,
        n: 1,
        size: '1024x1024',
      })
      const image_url = response.data[0].url
      const data: string | undefined = image_url
      await db.collection('profiles').updateOne(
        {
          uid: user.sub,
        },
        {
          $inc: {
            credits: -1,
          },
        }
      )
      return NextResponse.json(
        { success: true, data: data },
        {
          status: 200,
        }
      )
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }
  }
)
