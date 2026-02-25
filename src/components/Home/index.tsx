
import { UnderLineText } from "@/constant/CommonFunction";
import { PortfolioContext } from "@/context/PortfolioContext";
import Image from "next/image";
import { useContext } from "react";

const HomeMine = () => {
  const data = useContext(PortfolioContext);

  return (
    <section className="relative w-full md:min-h-screen min-h-[70vh] sm:min-h-[100vh] flex overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <Image
          width={700}
          height={1}
          src="/image/new-bg1.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 flex items-start justify-center md:min-h-screen  px-4 text-white text-center flex-col">
        <h1 className="text-[14px] text-left md:text-[32px] font-bold">
          {
            data.name
          } 
        </h1>
        <UnderLineText text="I&apos;m Software Developer" className='!text-left mb-0' />
      </div>
    </section>
  )
}
export default HomeMine