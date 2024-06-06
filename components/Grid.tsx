import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from '@/data'


function Grid() {
  return (
    <section>
      <BentoGrid>
        {
        gridItems //gridItems from data
        .map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) =>(
            <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
            />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);


export default Grid

// import React from 'react'
// import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
// import { gridItems } from '@/data'

// function Grid() {
//   return (
//     <section id="about">
//         <BentoGrid>
//             {
//             gridItems //gridItems from data
//             .map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) =>(
//                 <BentoGridItem 
//                     id={id}
//                     key={id}
//                     title={title}
//                     description={description}
//                     className={className}
//                     img={img}
//                     imgClassName={imgClassName}
//                     titleClassName={titleClassName}
//                     spareImg={spareImg}
//                 />
//             ))}
//         </BentoGrid>
//     </section>
//   )
// }

// export default Grid