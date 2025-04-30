"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HomeMine from "@/components/Home";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { useEffect } from "react";

export default function Home() {

  // useEffect(() => {
  //   const ref = typeof document !== 'undefined' ? document.referrer : ''
  //   console.log(ref)
  //   if(ref){
  //     console.log('Inside')
  //      checkVisiter(ref)
  //   }
  // }, []);
  useEffect(() => {
      try {
        // Step 1: Check if MongoDB is connected
        // const dbRes = await fetch('/api/db-status');
        // const dbStatus = await dbRes.json();
        // console.log(dbStatus,'dbResdbRes')
  
        // if (dbStatus.connected) {
          // Step 2: Call your API now
          const ref = document.referrer;
          console.log(ref)
          if (ref) {
            setTimeout(() => {
             checkVisiter(ref);
          }, 500);
          // }
        } else {
          console.warn('MongoDB not connected.');
        }
      } catch (err) {
        console.error('Error during init:', err);
      }
  
  }, []);

  async function checkVisiter(visitUrl: string) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 10000);
    const url = "api/visit-user";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ visiterUrl: visitUrl }),
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json
    } catch (error) {
      console.error(error);
    }

  }

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
