"use client"

import { PortfolioContext } from "@/context/PortfolioContext";
import { useContext } from "react";
import { FcNext } from "react-icons/fc";

const Resume = () => {
    const data = useContext(PortfolioContext);
    const { aboutme, education, workExperience } = data || {}

    return (
        <section id='resume' className="pl-2">
            <h2 className='text-[32px] font-bold mb-10'>
                Resume
            </h2>
            <p className='text-[18px] font-normal mt-10'>
                {
                    aboutme
                }
            </p>
            <div className="flex flex-1 mt-10 flex justify-around">
                <div className="">
                    <h2 className='text-[24px] font-[600] mb-5'>
                        Education
                    </h2>
                    <div className="ml-3">
                        {
                            (education || []).map((edu, index) => {
                                return (
                                    <div key={index} className="mt-5">
                                        <h2 className="text-[#525354] text-[18px] font-normal flex items-center"> <FcNext />{edu.class}</h2>
                                        <ul className="ml-5">
                                            <h5 className="text-[16px] font-[700]">{edu.passingDate}</h5>
                                            <h4 className="text-[#525354] text-[16px] font-[600]"><em>{edu.board}</em></h4>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[24px] font-[600] mb-5'>
                        Professional Experience
                    </h2>
                    <div className="ml-3">
                        {
                            (workExperience || []).map((exp, index) => {
                                return (
                                    <div key={index} className="mt-5">
                                        <h2 className="text-[#525354] text-[18px] font-normal flex items-center"> <FcNext />{exp.specialization}</h2>
                                        <div className="ml-5">
                                            <h5 className="text-[16px] font-[700]">{exp.time}</h5>
                                            <h4 className="text-[#525354] text-[16px] font-[600]"><em>{exp.companyName}</em></h4>
                                        </div>
                                       { (exp.role || []).map((_el, key)=>{
                                        return(
                                        <ul className="ml-5 text-[12px]" key={key}>
                                            <li>{_el.name}</li>
                                        </ul>
                                        )
                                       })  }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume