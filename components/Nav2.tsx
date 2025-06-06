import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { FcGoogle } from 'react-icons/fc'
import { BiCoin } from 'react-icons/bi'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useRecoilState } from 'recoil'
import { profileAtom } from '@/atoms/profileAtom'
const Nav2 = () => {
  const { user }: any = useUser()
  const [profile, setProfile] = useRecoilState(profileAtom)

  return (
    <div>
      <div className="bg-orange-400 min-h-11 flex flex-wrap md:flex-row justify-between px-4 md:px-24">
        <div className="my-auto bg-yellow-200 rounded-full border border-black">
          <div className="flex flex-wrap md:flex-row justify-between text-white my-auto p-1">
            <div>
              <BiCoin className="my-1 text-blue-800" />
            </div>
            <div className="xs:hidden text-blue-800">
              <h1>Credits</h1>
            </div>
            <div className="text-blue-800">:{profile?.credits}</div>
          </div>
        </div>
        <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* Profile dropdown */}
          {user ? (
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-yellow-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={user?.picture}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="text-center absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/api/auth/logout"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Logout
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <div className="mt-[0.5px] flex flex-row bg-indigo-500 p-2 text-white md:ml-8 font-semibold rounded duration-500 md:static">
              <a href="/api/auth/login">Login/Sign-up with</a>
              <div className="bg-white p-1 ml-2 my-auto rounded-full">
                <a href="/api/auth/login">
                  <FcGoogle />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav2
