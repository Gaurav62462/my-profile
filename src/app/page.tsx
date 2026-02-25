"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import HobbiesSection from "@/components/HobbiesSection";
import HomeMine from "@/components/Home";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
// import TestComponent from "@/components/TestComponent";
import { Divider } from "@/constant/CommonFunction";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    try {
      const ref = typeof document !== 'undefined' ? document.referrer : '';
      // console.log(ref)
      if (ref) {
        setTimeout(() => {
          checkVisiter(ref);
        }, 2000)
      } else {
        console.warn('MongoDB not connected.');
      }
    } catch (err) {
      console.error('Error during init:', err);
    }

  }, []);

  async function checkVisiter(visitUrl: string) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 8000);
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
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Resume />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        {/* <HobbiesSection /> */}
        {/* <Divider /> */}
        {/* <Footer /> */}
        {/* <TestComponent /> */}
        <div className="pt-10" />
      </div>
    </div>
  );
}
