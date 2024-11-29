import React from 'react'
import {  signIn , auth} from "@/auth"
import { FaGithub } from "react-icons/fa6";

async function data ({params} : {params:{quotes:string}}){
    const quote = await fetch(`https://dummyjson.com/quotes/${params.quotes}`);
    const conv = await quote.json();
    console.log(conv);
    const session = await auth();
    console.log(session)
    const user = session?.user ;
  return user? (
    <div className='text-black mt-[50px] mb-[100px]'>
                <div>
                <h1 className='scroll-m-20 text-4xl font-extrabold text-center mb-[40px] tracking-tight lg:text-5xl text-white '>Quote by {conv.author}</h1>
                <section className="text-black body-font bg-gray-200 md:mx-[150px] mx-6 lg:mx-[300px] rounded-lg">
  <div className=" px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block w-8 h-8 text-black mb-8"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
      </svg>
      <p className="leading-relaxed text-xl font-bold">
      {conv.quote}
      </p>
      <span className="inline-block bg-black h-1 w-10 rounded text-black mt-8 mb-6 " />
      <h2 className="text-black font-semibold title-font tracking-wider text-[16px]">
      By {conv.author}
      </h2>
    </div>
  </div>
</section>
                </div>
    </div>
  ): 
  (
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
export default data
