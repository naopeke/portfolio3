import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'; 


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
        </div>
        <div className="flex flex-col justify-between items-center mt-16">
            <p className="text-center text-white-200">© 2024 Nao Mukai</p>
        
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) =>(
                    <div key={profile.id} className="flex justify-center items-center w-10 h-10 cursor-pointer">
                        <Image src={profile.img} alt="icons" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer