import { HoverEffect } from "./ui/card-hover-effect";
import { technologies } from '@/data'


function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={technologies} />
    </div>
  );
}

export default Cards;