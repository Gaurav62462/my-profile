import { PortfolioContext } from "@/app/layout";
import { useContext } from "react";

const Skills = () => {
        const data = useContext(PortfolioContext);
        const {skills, lang} = data || {}
    
    return (
        <section id='skill' className="bg-[#f4fafd] mt-5 pl-2 pb-8">
            <h2 className='text-[32px] font-bold mb-10'>
                Skills
            </h2>

            <div className="flex w-full flex-col md:flex-row">
                <div className="md:w-[50%] w-full">
                    <h2 className='text-[24px] font-[600] mb-5'>
                    Languages & Frameworks
                    </h2>
                    {
                        (lang || []).map((skill, index) => {
                            return (
                                <div key={index} className="mb-5">
                                    <div className="flex justify-between">
                                    <h3 className="uppercase">{skill.skillName}</h3>
                                    {/* <span>{skill.value}%</span> */}
                                    </div>
                                    <progress className="w-[80%] [&::-webkit-progress-bar]:bg-[#dfe5e8] [&::-webkit-progress-value]:bg-blue_200 h-[10px] mr-3"
                                        id='file' value={skill.value} max={100} />{skill.value}%
                                </div>

                            )
                        })
                    }
                </div>

                <div className="md:w-[50%] w-full">
                    <h2 className='text-[24px] font-[600] mb-5 '>
                        Skill
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {
                            (skills || []).map((skill, index) => {
                                return (
                                    <div key={index} className="text-[12px] py-[7px] px-[20px] flex items-center justify-center rounded-[30px] bg-blue_200 text-white">{skill.skillName}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills