import Link from 'next/link';
import { PiQuotesFill } from "react-icons/pi";
import React from 'react'

export default async function data () {
    const quote = await fetch("https://dummyjson.com/quotes");
    const conv = await quote.json();
    console.log(conv);
  return (
    <div className='mt-[50px] mb-[100px]'>
      <h1 className='scroll-m-20 text-4xl font-extrabold text-center mb-[20px] tracking-tight lg:text-5xl'>Simple Quotes</h1>
        <div className='text-white lg:grid lg:grid-cols-2'>
      {conv.quotes.map((items:any)=>{
        return(
            <Link href={`/quotes/${items.id}`} key={items.id}>
                <div className="text-gray-600 body-font ">
  <div className="px-16 py-4  ">
    <div className="">
      <div className="xl:w-[500px] md:[100px] p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex text-black items-center justify-center rounded-full bg-indigo-100 mb-4">
           <PiQuotesFill className='text-black text-2xl'/>
          </div>
          <h2 className="text-xl  text-white font-bold  title-font mb-2">
           {items.author}
          </h2>
          <p className="leading-relaxed text-[15px] text-white line-clamp-1 ">
           {items.quote}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </Link>
        )
      })}
    </div>
    </div>
  )
}

