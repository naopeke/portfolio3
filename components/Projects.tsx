import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'


const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
      My Latest Works: Pushing the Boundaries of {' '} 
      <span className="text-purple">Web and Application</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(( {id, title, des, img, iconLists, link,
        })=>(
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[60vw] ">
               <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    {/* <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"> */}
                    <div className="relative w-full h-full overflow-hidden bg-[#13162d]">

                        <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img src={img} alt={title} className="z-10 absolute bottom-0" />
                </div>
                
                {/* The line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-case line-clamp-1">
                    {title}
                </h1>

                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                </p>


                {/* icons */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon)=>(
                      <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                        <img src={icon} alt={icon} className="p-2" color="#CBACF9"/>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm hover:text-purple transition-colors duration-400" >Check Website</p>
                    <FaLocationArrow className="ms-3"/>
                  </div>
                </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
