import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongo'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.stripe_secret_key!, {
  apiVersion: '2024-04-10',
  typescript: true,
})

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.text()
    const sig = request.headers.get('stripe-signature')

    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, sig!, endpointSecret)
    } catch (error) {
      return NextResponse.error()
    }
    switch (event.type) {
      case 'payment_intent.succeeded':
        const { db } = await connectToDatabase()
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const uid = paymentIntent.metadata.uid
        const profile = await db
          .collection('profiles')
          .find({
            uid: uid,
          })
          .toArray()
        if (profile.length === 0) {
          await db.collection('profiles').insertOne({
            uid: uid,
            credits: 10,
          })
        } else {
          await db.collection('profiles').updateOne(
            { uid: uid },
            {
              $inc: { credits: 10 },
            }
          )
        }

        break
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ message: 'success' }, { status: 200 })
  } catch (error) {
    return NextResponse.error()
  }
}
