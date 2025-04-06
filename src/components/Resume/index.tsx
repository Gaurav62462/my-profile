"use client"

import { UnderLineText } from "@/constant/CommonFunction";
import { PortfolioContext } from "@/context/PortfolioContext";
import { useContext } from "react";
import { FcNext } from "react-icons/fc";

const Resume = () => {
    const data = useContext(PortfolioContext);
    const { education, workExperience } = data || {}

    return (
        <section id='resume' className="pl-2">
             <UnderLineText text="Resume" />
            <div className="flex flex-1 mt-10 flex justify-around flex-wrap md:flex-nowrap md:justify-start">
                <div className=" flex flex-col justify-start w-full">
                    <h2 className='text-[24px] font-[600] '>
                        Education
                    </h2>
                    <div className="ml-3">
                        {
                            (education || []).map((edu, index) => {
                                return (
                                    <div key={index} className="mt-5">
                                        <h2 className="text-[#525354] text-[18px] font-normal flex items-center"> <FcNext />{edu.class}</h2>
                                        <div className="ml-5">
                                            <h5 className="text-[16px] font-[700]">{edu.passingDate}</h5>
                                            <h4 className="text-[#525354] text-[16px] font-[600]"><em>{edu.board}</em></h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[24px] font-[600] mb-5 md:mt-0 mt-6'>
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