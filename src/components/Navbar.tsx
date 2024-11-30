import Link from 'next/link';
import React from 'react';
// import { signIn , auth , signOut } from "@/auth"
import { GiHamburgerMenu } from "react-icons/gi";
// import GitHub from "next-auth/providers/github"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Authpic from './Authpic';
import Forres from './Forres';

async function Navbar  ()  {
  return (
    <div>
      <div className='flex justify-between text-white font-bold px-10 py-5'>
        <div>
            <h1 className='text-2xl'>Ghaniya Khan</h1>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex gap-11 '>
                <Link href={"/"}><li className='hover:border-b-4 hover:duration-300 hover:border-white'>Home</li></Link>
                <Link href={"/quotes"}><li className='hover:border-b-4 hover:duration-300 hover:border-white'>Quotes</li></Link>
                <Link href={"/about"}><li className='hover:border-b-4 hover:duration-300 hover:border-white'>About</li></Link>
                <Link href={"contact"}><li className='hover:border-b-4 hover:duration-300 hover:border-white '>Contact</li></Link>
            </ul>
        </div>
        <div>
    <Authpic />
      <div className='lg:hidden block'>
      <Sheet>
  <SheetTrigger><GiHamburgerMenu/></SheetTrigger>
  <SheetContent>
  <Forres/>
    <ul className=''>
    <Link href={"/"}><li className='text-black font-bold text-xl py-2'>Home</li></Link>
        <Link href={"/quotes"}><li className='text-black font-bold text-xl py-2'>Quotes</li></Link>
        <Link href={"about"}><li className='text-black font-bold text-xl py-2'>About</li></Link>
        <Link href={"contact"}><li className='text-black font-bold text-xl py-2 '>Contact</li></Link>
    </ul>
  </SheetContent>
</Sheet>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
