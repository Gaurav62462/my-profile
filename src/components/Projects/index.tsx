"use client"

import { UnderLineText } from "@/constant/CommonFunction";
import { PortfolioContext } from "@/context/PortfolioContext";
import Image from "next/image";
import { useContext } from "react";

const Projects = () => {
    const data = useContext(PortfolioContext);

    return (
        <section id='projects' className="bg-[url('/image/11.jpg')] bg-fixed bg-cover transition-all min-h-screen">
            <div className='bg-white pb-1'>
            <UnderLineText text="Projects" />
            </div>
            <div className="flex flex-wrap gap-4 justify-around p-4">
                {
                    data?.projects.map((project, index) => {
                        return (
                            <div key={index} className="relative p-4 flex justify-center group  rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-white cursor-pointer">
                                <Image
                                    width={150}
                                    height={80}
                                    src={`/image/${project.projectLogo}`}
                                    alt={project.name}
                                    className="transition-transform duration-300 min-h-[150px] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                    <p className="text-[12px] text-white mt-2">{project.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                        {[].map((tech, index) => (
                                            <span key={index} className="px-3 py-1 text-xs bg-gray-700 text-white rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Projects