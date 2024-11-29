import Image from 'next/image'
import React from 'react'
import quotespic from "../../public/Simple.png"
const Hero = () => {
  return (
    <div>
      <section className="text-white body-font">
  <div className="container mx-auto flex px-9 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-6 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 block lg:hidden">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={quotespic}
      />
    </div>
      <h1 className="scroll-m-20 text-xl font-extrabold text-center mb-[10px] tracking-tight lg:text-2xl text-white ">Welcome to the</h1>
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center lg:mb-[40px] tracking-tight lg:text-5xl text-white ">
       Simple Quotes Website
      </h1>
      <p className="mb-8 leading-relaxed">
      Quotes are statements, phrases, or sentences that express wisdom, inspiration, or advice are taken from a person, book, or other source, and repeated or referenced in another context. They are often used to convey a message, express an opinion, or provide insight into a particular topic or issue.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:block hidden">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={quotespic}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
