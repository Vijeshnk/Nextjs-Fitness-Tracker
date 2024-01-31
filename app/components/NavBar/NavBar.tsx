'use client';

import classnames from 'classnames';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { deleteCookie } from 'cookies-next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';

const NavBar = () => {

  const currentPath = usePathname()


  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Category", href: "/category" }
  ]
  const router = useRouter();

  const Logout = () => {
    deleteCookie('token');
    router.push('/login');
  }

  function ProfilePageLink() {
    return router.push('/profile');
  }

  const SettingsPageLink = () => {
    return router.push('/settings');
  }


  return (
    <nav className='flex justify-between border-b mb-5 px-9 h-14 items-center'>
      <div className='flex space-x-6'>
        <Link href='/'><IoIosFitness size='2rem' /></Link>
        <ul className='flex space-x-6'>
          {links.map(link => (
            <li key={link.href}>
              <Link legacyBehavior href={link.href}>
                <a className={classnames('text-zinc-500 hover:text-zinc-800 transition-colors', { 'text-zinc-900': link.href === currentPath })}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="rounded-full w-[35px] h-[35px]  inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customise options"><RxHamburgerMenu /></button>
        </DropdownMenu.Trigger >
        < DropdownMenu.Portal>
          <DropdownMenu.Content className="min-w-[100px] border bg-white rounded-md  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-violet3 text-slate-500 cursor-not-allowed " >Profile</DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-violet3 text-slate-500 cursor-not-allowed"  >Settings</DropdownMenu.Item>
            <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-violet3 hover:cursor-pointer" onClick={Logout}>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  )
}

export default NavBar