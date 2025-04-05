"use client"

import { PortfolioContext } from "@/app/layout";
import { useContext } from "react";

const HomeMine = () => {
    const data = useContext(PortfolioContext);

    return (
        <section id='home' className="h-full bg-[url('/image/bg-a.png')] bg-cover bg-center bg-no-repeat flex items-center min-h-screen">
            <div className="w-full h-full  flex items-center">
                <p className="text-[64px] text-white font-bold line-clamp-3">
                    {
                        data.name
                    }
                </p>
            </div>
        </section>
    )
}
export default HomeMine