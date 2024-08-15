"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";



const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleSidebar = () => {
    setMenu(!menu)
  }
  return (
    <div className='max-w-[1280px] p-4 mx-auto'>
      <div className="nav-content flex justify-between items-center">
        <div className="logo"><h1 className='text-xl font-[600]'>Romaan</h1></div>
        <div className="nav-links hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Membership
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Shop
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex md:hidden justify-center align-middle cursor-pointer' onClick={toggleSidebar}>
          { menu ? <IoCloseSharp className='text-2xl' /> : <GiHamburgerMenu className='text-2xl' />  }
        </div>
      </div>
    </div>
  )
}

export default Nav