// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloadingNav";
import Image from "next/image";
import Cards from "@/components/Cards";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    {/* /<main className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems = {navItems}/>
        <Hero />
        {/* <Grid /> */}
        <Cards />
        <Projects />
        <Experience />
        <Process />
      </div>
    </main>
  );
}
