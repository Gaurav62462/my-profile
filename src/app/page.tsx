"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HomeMine from "@/components/Home";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [referrer, setReferrer] = useState<string | null>(null);

  useEffect(() => {
    const fullReferrer = typeof document !== 'undefined' && window.location.href ;
    const ref = typeof document !== 'undefined' && document.referrer ; // Get the full referrer URL
    console.log(ref,'referrerreferrer',fullReferrer)
    console.log(document,'document')
    if (fullReferrer) {
      setReferrer(fullReferrer);
    }
  }, [referrer]);



    //   const callApi = async () => {
    //   try {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users`);
    // const data = await response.json();
    // console.log('data data:', data);
    // return data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   }

    //   useEffect(() => {
    //       callApi();
    //   }, []);


  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <HomeMine />
        <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
        <About />
        <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
        <Skills />
        <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
        <Resume />
        <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
        <Projects />
        <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
        <Contact />
        <div className="pt-10" />
      </div>
    </div>
  );
}
