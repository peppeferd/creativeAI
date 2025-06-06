import { profileAtom } from "@/atoms/profileAtom";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Permanent_Marker } from "next/font/google";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { BiCoin } from "react-icons/bi";
const firstFont = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
const navigation = [
  /*   { name: 'About us', href: '/about' }, */
  { name: "Contact us", href: "/contact" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { user }: any = useUser();
  const router: any = useRouter();

  const [profile, setProfile] = useRecoilState(profileAtom);

  return (
    <Disclosure as="nav" className="bg-orange-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-center mx-auto sm:items-stretch sm:justify-start gap-11">
            {/*  <div className="flex flex-row text-white my-auto mr-3">
              <div>
                <BiCoin className="my-1" />
              </div>
              <div className="xs:hidden">
                <h1>Credits</h1>
              </div>
              <div>:{profile?.credits}</div>
            </div> */}

            <div className="flex flex-shrink-0 ">
              <h1
                onClick={() => router.push("/")}
                className={`text-center ${firstFont.className} shadow-2xl border-4 border-t-indigo-300 border-r-indigo-300 border-b-indigo-600 border-l-indigo-600 rounded-full p-1 text-xl font-bold cursor-pointer bg-transparent text-indigo-200`}
              >
                Image Drop AI
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "bg-indigo-900 text-white my-1",
                      "text-gray-200 hover:bg-indigo-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                "bg-indigo-900 text-white",
                "text-gray-200 hover:bg-indigo-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
