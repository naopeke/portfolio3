import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow  } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'; 
import { FaGithub } from 'react-icons/fa';
import { TbBrandBitbucket } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src="/footer-grid.svg" alt="footer-grid" className="w-full h-full opacity-50" />
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
            Experience the best <span className="text-[#4cceac]">website experience</span> now
            </h1>
            <p className="text-white-200 text-center md:mt-8 my-5">Let&apos;s work together to achieve your goals and satisfy your clients.</p>
      
            <a href="mailto:naomukai@gmail.com">
                <MagicButton 
                    title="Get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>

            <a href="/public/cv_nao_mukai(EN).pdf" className="text-white-200 mt-4 cursor-pointer z-10 hover:text-[#4cceac] transition duration-400" download>Download My CV</a>
        </div>
        <div className="flex flex-col justify-between items-center mt-16">
            <p className="text-center text-white-200">© 2024 Nao Mukai</p>
        
            <div className="flex items-center md:gap-3 gap-6 z-10">
                {socialMedia.map((profile) =>(
                    <a 
                        key={profile.id} 
                        className="flex justify-center items-center w-10 h-10 cursor-pointer"
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <profile.icon size={20} className="hover:text-[#4cceac] transition duration-400" />
                    </a>
                ))}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer