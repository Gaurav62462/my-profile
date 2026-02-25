import { PortfolioContext } from "@/context/PortfolioContext";
import { useContext } from "react";

const Footer = () => {
        const data = useContext(PortfolioContext);
    
    return(
        <div>
            <div className="flex gap-4">
                        {
                            data?.socialLinks.map((_social, index) => {
                                const Icon = _social.icon;
                                return (
                                    <div key={index} className="w-[40px] transition-all mt-2 h-[40px] bg-[#1d232c] flex items-center justify-center rounded-[50%] hover:bg-blue_200">
                                        <a href={_social.url} target="_blank">
                                            <Icon color="white" fontSize={'20px'} />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
        </div>
    )
}
export default Footer