// rafc rfce
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { AnimatedTooltipPreview } from './Tooltip'
import { useNavigate } from 'react-router-dom';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa";


function Hero() {



  return (
    <>
      <div className="pb-20 pt-17">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="green"/>
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>



      <div className="relative flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Stunning and Interactive Portfolio with Next.js
          </h2>
          <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Functional and user-friendly web design that delights and inspires"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
          Hi, I am Nao, a QA Engineer specializing in Manual and Automation testing, based in Spain.
          </p>
          < AnimatedTooltipPreview />
          <a href="#projects">
            <MagicButton
              title="Go TO MY PROJECTS" 
              icon = {<FaLocationArrow />}
              position = 'right'
              />
          </a>
        </div>
      </div>



  </>
  )
}

export default Hero