'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { message } from 'antd'
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google'
import { Anton } from 'next/font/google'
import { Foldit } from 'next/font/google'
import { sendEmail } from './sendEmail'

const thirdFont = Anton({ subsets: ['latin'], weight: ['400'] })
const otherFont = Foldit({ subsets: ['latin'], weight: ['400'] })

const fontScript = Edu_VIC_WA_NT_Beginner({
  subsets: ['latin'],
  weight: ['400'],
})
export type FormData = {
  name: string
  email: string
  message: string
}

const Contactoo: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
    message.success('Email sent!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center my-5">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Insert your name"
          className="w-fit rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('name', { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Insert your email"
          className="w-fit rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('email', { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Write your message"
          className="w-fit md:w-[700px] resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className={`text-white text-4xl ${fontScript.className}`}>
        <button className="hover:shadow-form rounded-md bg-blue-700 py-3 px-8 text-2xl font-semibold text-white outline-none">
          Send
        </button>
      </div>
    </form>
  )
}

export default Contactoo
