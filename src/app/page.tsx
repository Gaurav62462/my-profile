"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HomeMine from "@/components/Home";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <HomeMine />
        <hr className="h-px my-8 border-0 dark:bg-[#e7e2e2]"></hr>
        <About />
        <hr className="h-px my-8 border-0 dark:bg-[#e7e2e2]"></hr>
        <Skills />
        <hr className="h-px my-8 border-0 dark:bg-[#e7e2e2]"></hr>
        <Resume />
        <hr className="h-px my-8 border-0 dark:bg-[#e7e2e2]"></hr>
        <Projects />
        <hr className="h-px my-8 border-0 dark:bg-[#e7e2e2]"></hr>
        <Contact />
      </div>
    </div>
  );
}
