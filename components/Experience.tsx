import React from 'react';
import { Button } from './ui/moving-border';
import { workExperience } from '@/data';
import Image from 'next/image'; 

function Experience() {
  return (
    <div className="py-20" id="strengths">
      <h1 className="heading">
        My Strengths:{' '} A <span className="text-[#4cceac]">Symphony </span>of Skills
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button 
            key={card.id}
            borderRadius='1.65rem'
            duration ={Math.floor(Math.random() * 10000) + 1000}
            className="flex-1 text-white"
          >
            <div className="flex md:items-start">
              <div className="flex lg:flex-row flex-col lg:items-center md:items-start p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                <div className="lg:w-28 md:w-12 w-16">
                  <img src={card.thumbnail} alt={card.thumbnail} />
                </div>
              </div>

              <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                  </p>
              </div>
            </div>
          </Button>
        ))}
      </div>


    </div>
  );
}

export default Experience;
