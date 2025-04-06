import { PortfolioContext } from "@/context/PortfolioContext";
import Image from "next/image";
import { useContext } from "react";
import { FcNext } from "react-icons/fc";


const About = () => {
    const data = useContext(PortfolioContext);
    const {aboutme,role,dob,website,phone,city,email,degree,freelance,}= data || {}

    const about =  [
        {label:'birthday',value:dob},
        {label:'Website',value:website},
        {label:'Phone',value:phone},
        {label:'City',value:city},
        {label:'Age',value:'27'},
        {label:'Degree',value:degree},
        {label:'Email',value:email},
        {label:'Freelance',value:freelance},
    ]

    return (
        <section id='about' className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">
          About
        </h2>
      
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              width={300}
              height={300}
              src="/image/about.png"
              alt="About"
              className="rounded-lg shadow-lg object-contain w-full max-w-[300px] h-auto"
            />
          </div>
      
          <div className="w-full md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
              {role}
            </h2>
      
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="w-full sm:w-1/2">
                <ul>
                  {(about || []).slice(0, 4).map((value, index) => (
                    <li key={index} className="mb-3 flex items-center gap-2 text-base">
                      <FcNext />
                      <strong>{value.label}:</strong>
                      <span>{value.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
      
              <div className="w-full sm:w-1/2">
                <ul>
                  {(about || []).slice(4, 8).map((value, index) => (
                    <li key={index} className="mb-3 flex items-center gap-2 text-base">
                      <FcNext />
                      <strong>{value.label}:</strong>
                      <span>{value.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
      
            <p className="text-base mt-6 text-justify">
              {aboutme}
            </p>
          </div>
        </div>
      </section>
    )
}
export default About