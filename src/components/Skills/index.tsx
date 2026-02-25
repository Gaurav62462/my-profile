import { CustomChip, UnderLineText } from "@/constant/CommonFunction";
import { PortfolioContext } from "@/context/PortfolioContext";
import { useContext } from "react";


const Skills = () => {
        const data = useContext(PortfolioContext);
        const {skills, lang} = data || {}
    
    return (
        <section id='skill' className="bg-[#f4fafd] mt-5 pl-2 pb-8">
             <UnderLineText text="Skills" />

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
                                    </div>
                                    <progress className="w-[80%] [&::-webkit-progress-bar]:bg-[#dfe5e8] [&::-webkit-progress-value]:bg-blue_200 h-[10px] mr-3"
                                         value={skill.value} max={100} />{skill.value}%
                                </div>

                            )
                        })
                    }
                </div>

                <div className="md:w-[50%] w-full">
                    <h2 className='text-[24px] font-[600] mb-5 '>
                        Technology
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {
                            (skills || []).map((skill, index) => {
                                return (
                                    <CustomChip key={index} label={skill.skillName} />
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