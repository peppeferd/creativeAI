'use client'

import { generatePost, saveImage } from '@/lib'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Form, message } from 'antd'
import picdefault from '../public/defaultimage.webp'
import { Shadows_Into_Light } from 'next/font/google'
import { useRecoilState } from 'recoil'
import { profileAtom } from '@/atoms/profileAtom'
import { getProfile } from '@/lib/functions'
import { refetchCreditsAtom } from '@/atoms/flagAtom'
import { useUser } from '@auth0/nextjs-auth0/client'
const firstFont = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})
const secondFont = Shadows_Into_Light({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})
export default function Home() {
  const [immagine, setImmagine] = useState<any>('')
  const [loading, setLoading] = useState(false)
  const [postPrompt, setPostPrompt] = useState<PostPrompt>({
    command: '',
    style: '',
  })
  const [refetchCredits, setRefetchCredits] = useRecoilState(refetchCreditsAtom)
  const { user } = useUser()
  const [altezza, setAltezza] = useState(512)
  const [profile, setProfile] = useRecoilState(profileAtom)
  useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile()
      setProfile(profile)
      setRefetchCredits((prev) => !prev)
    }
    if (user) fetchProfile()
  }, [setProfile, user, setRefetchCredits])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true)
    const res = await generatePost(postPrompt)
    console.log(res)
    await res
      .json()
      .then((data: any) => {
        setImmagine(data.data)
        setLoading(false)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  const selectFuturistic = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'futuristic',
    })
    message.success('Style selected')
  }
  const selectAnime = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'anime',
    })
    message.success('Style selected')
  }
  const select3d = () => {
    setPostPrompt({
      ...postPrompt,
      style: '3d',
    })
    message.success('Style selected')
  }
  const select2d = () => {
    setPostPrompt({
      ...postPrompt,
      style: '2d',
    })
    message.success('Style selected')
  }
  const selectCybernetic = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'cybernetic',
    })
    message.success('Style selected')
  }

  const selectLandscape = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'landscape',
    })
    message.success('Style selected')
  }
  const selectFloral = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'floral',
    })
    message.success('Style selected')
  }
  const selectPunk = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'punk',
    })
    message.success('Style selected')
  }
  const selectWhiteBlack = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'white&black',
    })
    message.success('Style selected')
  }
  const selectBloody = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'bloody',
    })
    message.success('Style selected')
  }
  const selectTech = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'tech',
    })
    message.success('Style selected')
  }
  const selectTropical = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'tropical',
    })
    message.success('Style selected')
  }
  const selectNatural = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'natural',
    })
    message.success('Style selected')
  }

  const selectPortrait = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'portrait',
    })
    message.success('Style selected')
  }

  const selectPainting = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'painting',
    })
    message.success('Style selected')
  }

  const selectMosaic = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'mosaic',
    })
    message.success('Style selected')
  }

  const selectCartoon = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'cartoon',
    })
    message.success('Style selected')
  }
  const selectMusical = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'musical',
    })
    message.success('Style selected')
  }
  const selectEvergreen = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'evergreen',
    })
    message.success('Style selected')
  }
  const selectSmile = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'smile',
    })
    message.success('Style selected')
  }
  const selectOld = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'old',
    })
    message.success('Style selected')
  }

  const selectNegative = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'negative',
    })
    message.success('Style selected')
  }
  const selectAnimalist = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'animalist',
    })
    message.success('Style selected')
  }
  const selectMetropolitan = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'metropolitan',
    })
    message.success('Style selected')
  }

  const selectSunny = () => {
    setPostPrompt({
      ...postPrompt,
      style: 'sunny',
    })
    message.success('Style selected')
  }

  return (
    <div className="pt-20 min-h-[200vh] bg-indigo-800 justify-center items-center text-center">
      <title>Creative AI - Home</title>
      <div className="mx-2">
        <h1
          className={`bg-orange-300 text-3xl text-indigo-800 p-4 rounded-2xl w-fit mb-16 mx-auto text-center ${firstFont.className}`}
        >
          Create your own AI generated HD image
        </h1>
        <div className="flex flex-wrap gap-28 justify-center">
          <div>
            <Form
              name="ai-generator"
              onFinish={handleSubmit}
              scrollToFirstError
            >
              <div>
                <div>
                  <h1
                    className={`bg-white text-indigo-800 mb-2 w-fit mx-auto p-2 rounded-lg font-bold text-3xl ${secondFont.className}`}
                  >
                    Write your command
                  </h1>
                  <Form.Item name="command" label="">
                    <textarea
                      className="lg:w-[50vh] md:w-[40vh] w-[27vh] h-[20vh] resize-none rounded-lg text-xl tracking-widest font-extralight py-2 px-3"
                      onChange={(e) =>
                        setPostPrompt({
                          ...postPrompt,
                          command: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>

              {profile.credits ? (
                <div>
                  <Button
                    className="w-fit"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                  >
                    Submit command
                  </Button>
                </div>
              ) : (
                <div className="bg-orange-300 p-4 rounded-xl mt-3">
                  Buy some credits in the
                  <a
                    className="bg-indigo-800 text-white ml-2 p-2"
                    href="/profile"
                  >
                    Profile section
                  </a>
                </div>
              )}
            </Form>
          </div>
          <div className="bg-orange-100 text-green-600 h-full xl:w-[70vh] w-[40vh] rounded-xl">
            <h1
              className={`text-center text-2xl bg-indigo-500 py-7 text-white rounded-t-lg ${secondFont.className}`}
            >
              Choose style
            </h1>
            <div className="grid grid-cols-2">
              <div>
                <div>
                  <h3
                    onClick={selectFuturistic}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Futuristic
                  </h3>
                  <h3
                    onClick={selectNatural}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Anime
                  </h3>
                  <h3
                    onClick={select2d}
                    className="pb-13 border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    2d
                  </h3>
                  <h3
                    onClick={select3d}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    3d
                  </h3>
                  <h3
                    onClick={selectCybernetic}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Cybernetic
                  </h3>
                  <h3
                    onClick={selectLandscape}
                    className="pb-13  border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Landscape
                  </h3>

                  <h3
                    onClick={selectFloral}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Floral
                  </h3>
                  <h3
                    onClick={selectPunk}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Punk
                  </h3>
                  <h3
                    onClick={selectWhiteBlack}
                    className="pb-13  border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    White & Black
                  </h3>
                  <h3
                    onClick={selectBloody}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Bloody
                  </h3>
                  <h3
                    onClick={selectTech}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Tech
                  </h3>
                  <h3
                    onClick={selectTropical}
                    className="pb-13 border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Tropical
                  </h3>
                  <h3
                    onClick={selectNatural}
                    className="pb-13 rounded-b-xl border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Natural
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <h3
                    onClick={selectPortrait}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Portrait
                  </h3>
                  <h3
                    onClick={selectPainting}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Painting
                  </h3>
                  <h3
                    onClick={selectMosaic}
                    className="pb-13 border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Mosaic
                  </h3>
                  <h3
                    onClick={selectCartoon}
                    className="border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Cartoon
                  </h3>
                  <h3
                    onClick={selectMusical}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Musical
                  </h3>
                  <h3
                    onClick={selectEvergreen}
                    className="pb-13  border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Evergreen
                  </h3>

                  <h3
                    onClick={selectMusical}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Musical
                  </h3>
                  <h3
                    onClick={selectSmile}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Smile
                  </h3>
                  <h3
                    onClick={selectOld}
                    className="pb-13  border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Old
                  </h3>
                  <h3
                    onClick={selectNegative}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Negative
                  </h3>
                  <h3
                    onClick={selectAnimalist}
                    className=" border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Animalist
                  </h3>
                  <h3
                    onClick={selectMetropolitan}
                    className="pb-13 border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Metropolitan
                  </h3>
                  <h3
                    onClick={selectSunny}
                    className="pb-13 rounded-b-xl border border-solid border-black hover:border-green-300 hover:bg-black hover:text-orange-300 cursor-pointer"
                  >
                    Sunny
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader justify-center items-center mx-auto mt-32"></div>
      ) : (
        <div className="justify-center mt-32 xl:mx-auto mx-4 pb-5">
          <Image
            className="generated mx-auto"
            width={altezza}
            height={altezza}
            alt="imm"
            src={immagine === '' ? picdefault : immagine}
          />
          <h1 className="my-5 text-3xl text-white">
            After generated, choose your prefered image size:
          </h1>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(256)}
            >
              256x256
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(512)}
            >
              512x512
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(1024)}
            >
              1024x1024
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(1792)}
            >
              1792x1792
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
