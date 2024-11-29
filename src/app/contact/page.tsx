import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
const page = () => {
  return (
    <div>
      <section className="text-white body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
        Contact Me
      </h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify.
      </p> */}
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto bg-white text-black border-0 py-2 px-8 focus:outline-none rounded text-lg">
            Submit
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t  text-center">
          <a className="text-myverydarkpink cursor-pointer">ghaniyaakhann08@gmail.com</a>
          <p className="leading-normal my-5 text-myverydarkpink">
            Follow me
            <br />
            For more updates 
          </p>
          <span className="inline-flex text-2xl gap-3 text-myverydarkpink">
          <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
          <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default page
