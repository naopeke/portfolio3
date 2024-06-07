import React from 'react'

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

function MagicButton({title, icon, position, handleClick, otherClasses}:MagicButtonProps) {


  return (
    <button className="p-[3px] relative w-full md:w-75" onClick={handleClick}>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg" />
    <div className="gap-2 uppercase flex relative px-8 py-2 bg-black rounded-[6px] group transition duration-200 text-white hover:bg-transparent">
      {position === 'left' && icon }
      {title}
      {position === 'right' && icon }
    </div>
  </button>
)
}

export default MagicButton