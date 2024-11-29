import Image from 'next/image'
import React from 'react'
import ghaniya from "../../../public/ghaniya.png"
const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={ghaniya}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-white font-bold">
      Hello!
        <br className="text-white font-bold" />
        Im Ghaniya Khan,
      </h1>
      <p className="mb-8 leading-relaxed text-white">
        a passionate frontend developer and student at GIAIC, pursuing my college studies simultaneously. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, Ive also gained expertise in design tools like Figma, and frameworks like React and Next.js. This practice project website is my attempt to showcase my skills and creativity, and Im excited to share it with you!
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
        <a href="https://github.com/Ghaniya08">Explor my work</a>
        
        </button>
        <button className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">
        <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308">Contact me</a>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default page
