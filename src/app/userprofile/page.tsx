import React from 'react'
import { signOut , signIn , auth} from "@/auth"
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image'
export default async function userprofile() {
    const session = await auth();
    console.log(session)
    const user = session?.user ;
  return user? (
    <div className='px-6 lg:px-[260px] lg:py-[45px] '>
      <div className='lg:w-[800px]  lg:h-[500px] border-black text-black rounded-lg border outline-none ease-in-out bg-white'>
        <h1 className='font-bold lg:text-3xl text-2xl text-black lg:py-[20px] text-center '>User Info</h1>
    <div className='lg:flex lg:gap-[40px] justify-between lg:px-[100px]'>
    <div className='lg:hidden block ml-[110px] mt-5 '>
  <Image 
    src={session?.user?.image || ""} 
    alt="userimg"
    width={100}
    height={100}
    className="lg:w-[200px] lg:h-[200px] rounded-full"
    />
  </div> 
    <div className='flex flex-col lg:gap-[20px]'>
    <div className=''>
    <h1 className='text-[17px] lg:mx-0 mx-5 font-bold' >Name: </h1>
    <h1 className='lg:text-[20px] lg:mx-3 mx-5 text-[15px] lg:px-[20px] border-gray-300 pt-[10px] pb-[10px] lg:w-full w-[200px] rounded border outline-none ease-in-out '>{session?.user?.name}</h1>
    </div>
    <div>
    <h1 className='text-[17px] lg:mx-0 mx-5 font-bold'>Email: </h1>
    <h1 className='lg:text-[20px] mx-5 lg:mx-3 text-[15px] lg:px-[20px] border-gray-300 pt-[10px] pb-[10px] lg:w-full w-[250px] rounded border outline-none ease-in-out'>{session?.user?.email}</h1>
    </div>
    </div>
    <div className='hidden lg:block'>
  <Image 
    src={session?.user?.image || ""} 
    alt="userimg"
    width={100}
    height={100}
    className="lg:w-[200px] lg:h-[200px] rounded-full"
    />
  </div>
  </div>
  <form
      action={async () => {
        "use server"
        await signOut()}}>
             <div className="flex gap-3 ">
      <button type="submit" className="bg-black ml-[120px] mt-2  text-white lg:ml-[200px] lg:mt-[20px] rounded-lg p-[8px] lg:w-[100px] ">Logout</button>
             </div>
    </form> 
    <p className='lg:text-[16px] px-6 lg:px-[100px]  mt-[20px] '>{`Hi ${session?.user?.name} welcome to my website. This is my practice website created as part of Milestone 4 of the Next.js and React Comprehensive Course. It reflects my learning journey in implementing advanced Next.js concepts such as server-side rendering, data fetching, and basic user authentication. This is not a professional website but a personal project to enhance my skills.`}</p>
      </div>
    </div>
  ):(
    <div className='flex justify-center mt-[100px] mb-[100px] '>
         <div className="text-center mt-10 mb-10">
      <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
        <strong>Signin</strong>
      </h1>
      {/* <h1>With Github</h1> */}
      <div className="bg-gray-300  rounded-lg  px-7 py-7 lg:w-[300px] text-center justify-center mt-2  flex flex-col gap-6">
        <FaGithub className='text-3xl text-black text-center lg:ml-[110px] ml-[25px]'/>
        <form
      action={async () => {
        "use server"
        await signIn("github")}}>
      <button type="submit" className="bg-black text-white lg:h-[35px] w-[80px] rounded-lg ">LogIn</button>
    </form> 
      </div>
    </div>
    </div>
  )
}
