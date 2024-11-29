import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font flex justify-between ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between ">
    <a className="flex title-font font-bold text-white items-center md:justify-start justify-center text-2xl">
      <span className="ml-3 text-xl">Ghaniya Khan</span>
    </a>
    <span className="inline-flex text-2xl gap-3 text-myverydarkpink">
          <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
          <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
          </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
