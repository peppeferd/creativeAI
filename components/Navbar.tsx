'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaPeopleGroup, FaRegMessage } from 'react-icons/fa6'
import { BsFileEarmarkText } from 'react-icons/bs'
import { GiLongAntennaeBug } from 'react-icons/gi'
import { IoCreate } from 'react-icons/io5'
import { AiOutlineProfile } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'
import Loader from './Loader'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [visible, setVisible] = useState(true)
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const navigateToHome = () => {
    router.push('/')
    setNav(false)
  }
  const navigateToProfile = () => {
    router.push('/profile')
    setNav(false)
  }
  const navigateToContact = () => {
    router.push('/contact')
    setNav(false)
  }
  const { user, error, isLoading } = useUser()
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient)
    return (
      <div>
        <Loader />
      </div>
    )
  else
    return (
      <div>
        <div
          className={`bg-orange-300 sticky flex justify-evenly xl:text-xl md:text-xs items-center h-17 px-4 text-indigo-800 shadow-xl saliindex ${
            visible ? 'top-0' : 'hidden'
          } `}
        >
          {/* Logo */}

          <div className="flex flex-row bg-indigo-800 text-orange-300 my-1 p-1 rounded-full">
            <svg
              onClick={() => router.push('/')}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 mt-3 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
              />
            </svg>

            <h1
              onClick={() => router.push('/')}
              className="rounded-full p-3 text-xl font-bold cursor-pointer"
            >
              Creative AI
            </h1>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-xl gap-4">
            <div>
              <li
                onClick={() => router.push('/')}
                className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-indigo-500 hover:bg-slate-200 hover:rounded-lg"
              >
                <IoCreate className="my-auto mr-1 " />
                <h1 className="my-auto">Home - Create</h1>
              </li>
            </div>
            <div>
              <li
                onClick={() => router.push('/profile')}
                className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-indigo-500 hover:bg-slate-200 hover:rounded-lg"
              >
                <AiOutlineProfile className="my-auto mr-1" />
                <h1 className="my-auto">Profile</h1>
              </li>
            </div>
            {/*  <div>
              <li
                onClick={() => router.push('/about')}
                className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-indigo-500 hover:bg-slate-200 hover:rounded-lg"
              >
                <FaPeopleGroup className="my-auto mr-1" />
                <h1 className="my-auto">About</h1>
              </li>
            </div> */}

            <div>
              <li
                onClick={() => router.push('/contact')}
                className="flex flex-row cursor-pointer bg-transparent p-2 link link-underline link-underline-black hover:text-indigo-500 hover:bg-slate-200 hover:rounded-lg"
              >
                <FaRegMessage className="my-auto mr-1" />
                <h1 className="my-auto">Contact</h1>
              </li>
            </div>
            <div className="mt-[7px]">
              {user ? (
                <div>
                  <a
                    className="btn bg-indigo-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                    href="/api/auth/logout"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    className="btn bg-indigo-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                    href="/api/auth/login"
                  >
                    Login
                  </a>
                </div>
              )}
            </div>
          </ul>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden text-indigo-800 ml-16 p-3 rounded-full"
          >
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'absolute md:hidden left-0 top-12 h-fit w-full ease-in-out duration-500 mt-10 flex-col bg-white bg-opacity-90 gap-7 py-5 text-xl'
                : 'ease-in-out w-fit fixed top-0 bottom-0 left-[-100%] '
            }
          >
            <h1 className="w-fit p-4 text-3xl font-bold text-orange-300 mx-auto rounded-full cursor-pointer bg-indigo-800">
              Creative AI
            </h1>

            {/* Mobile Navigation Items */}
            <div
              onClick={navigateToHome}
              className="ml-4 mb-4 mt-2 bg-indigo-800 w-fit rounded-full"
            >
              <li className="flex flex-row cursor-pointer bg-transparent text-orange-300 p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit">
                <BsFileEarmarkText className="my-auto mr-1" /> Home - Create
              </li>
            </div>
            <div
              onClick={navigateToProfile}
              className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full"
            >
              <li className=" flex flex-row cursor-pointer bg-transparent text-orange-300 p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit">
                <GiLongAntennaeBug className="my-auto mr-1" />
                Profile
              </li>
            </div>
            {/*  <div className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full">
              <li className=" flex flex-row cursor-pointer bg-transparent text-orange-300 p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit">
                <FaPeopleGroup className="my-auto mr-1" /> About
              </li>
            </div> */}
            <div
              onClick={navigateToContact}
              className="ml-4 mb-4 bg-indigo-800 w-fit rounded-full"
            >
              <li className=" flex flex-row cursor-pointer bg-transparent text-orange-300 p-2 hover:underline hover:bg-gray-300 hover:p-2 hover:rounded-full hover:text-green-600 w-fit">
                <FaRegMessage className="my-auto mr-1" /> Contact
              </li>
            </div>
            <div className="mt-[7px]">
              {user ? (
                <div className="text-center">
                  <a
                    className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                    href="/api/auth/logout"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
                    href="/api/auth/login"
                  >
                    Login
                  </a>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    )
}

export default Navbar
