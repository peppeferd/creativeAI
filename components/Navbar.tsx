import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Permanent_Marker } from 'next/font/google'

const firstFont = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
})
const Navbar = () => {
  const { user }: any = useUser()
  const router: any = useRouter()
  return (
    <div>
      <div>
        <div className="navbar bg-orange-500">
          <div className="flex-1">
            <h1
              onClick={() => router.push('/')}
              className={`text-center ${firstFont.className} shadow-2xl border-4 border-t-indigo-300 border-r-indigo-300 border-b-indigo-600 border-l-indigo-600 rounded-full p-3 text-xl font-bold cursor-pointer bg-transparent text-indigo-200`}
            >
              Image Drop AI
            </h1>
            {/*    <div>
              <ul className="flex flex-row ml-5 md:ml-14 gap-11">
                <li className="text-center bg-white text-orange-600 hover:bg-orange-400 hover:text-indigo-800 p-2 rounded-full">
                  <a href="/about">About us</a>
                </li>
                <li className="text-center bg-white text-orange-600 hover:bg-orange-400 hover:text-indigo-800 p-2 rounded-full">
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="flex-none gap-2">
            <div className="form-control"></div>
            <div className="dropdown dropdown-end">
              {user ? (
                <div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.picture}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-orange-500 rounded-box z-[1] mt-3 w-52 p-2 shadow h-24 justify-center items-center gap-5"
                  >
                    <li className="bg-black text-yellow-200 hover:bg-yellow-300 hover:text-indigo-600 rounded-full">
                      <a href="/profile">Profile</a>
                    </li>
                    <li className="bg-black text-yellow-200 hover:bg-yellow-300 hover:text-indigo-600 rounded-full">
                      <a href="/api/auth/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex flex-row  text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
                  <a
                    className="btn border bg-white text-black hover:text-white hover:border-4 hover:border-black"
                    href="/api/auth/login"
                  >
                    Login/Sign-up with
                    <a href="/api/auth/login">
                      <FcGoogle />
                    </a>
                  </a>
                  {/*   <div className="bg-white p-1 ml-2 my-auto rounded-full">
                    <a href="/api/auth/login">
                      <FcGoogle />
                    </a>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
