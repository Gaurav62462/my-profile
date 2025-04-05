import { PortfolioContext } from "@/app/layout"
import Image from "next/image"
import { useContext, useState } from "react"
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsMailbox2Flag } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";

type HeaderProps = object
const menuItems = [
    { link: '#home', name: 'Home', icon: <BsFillHouseDoorFill /> },
    { link: '#about', name: 'About', icon: <BsFillPersonFill /> },
    { link: '#resume', name: 'Resume', icon: <BsFillFileEarmarkTextFill /> },
    { link: '#projects', name: 'Projects', icon: <BsPersonWorkspace /> },
    { link: '#contact', name: 'Contact', icon: <BsMailbox2Flag /> },
]

const Header = ({ }: HeaderProps) => {
    const data = useContext(PortfolioContext);
    const [active, setActive] = useState("home");
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleScroll = (id: string) => {
        setActive(id);
    };

    return (
        <>
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                />
            )}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#109DDC] text-white p-2 rounded"
            >
                <Image width={15} height={15} src={`/${isSidebarOpen ? 'hamburg.svg' : 'close.svg'}`} alt='logo' />
            </button>
            <aside
                className={`bg-[#040b14] p-8 transition-all duration-300 flex items-center flex-col ease-in-out fixed top-0 left-0 bottom-0 w-[300px] overflow-y-auto z-40
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 md:static md:flex`}
            // className={`bg-[#040b14] p-8 transition-all flex items-center flex-col ease-in-out 0.3s fixed top-0 left-0 bottom-0 w-[300px] overflow-y-auto`}
            >
                <div className="flex flex-col justify-center items-center mb-4">
                    <Image width={200} height={50} src={'/image/my-logo/logo-transparent.png'} alt='logo' />
                    <h1 className="text-[24px] font-bold text-white mb-4">{data.name}</h1>
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
                <ul className="space-y-4 w-full">
                    {menuItems.map((item, index) => {
                        return (
                            <a href={item.link} key={index} onClick={() => handleScroll(item.link)} className={`${active === item.link ? "!text-red-800 font-bold" : ""}`}>
                                <div className={`cursor-pointer duration-300 transition-all ${active === item.link ? "!text-white text-[16px] !font-bold" : ""} text-[#a8a9b4] pt-[13px] pb-[13px] !mt-0 flex hover:text-white items-start flex-row items-center gap-3`}>
                                    {item.icon}
                                    <li className={`!mt-0 text-[16px] font-normal text-center`}>
                                        {item.name}
                                    </li>
                                </div>
                            </a>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}

export default Header