'use client'
import "./globals.css";
import { createContext } from "react";
import MetadataLayout from "./metaDataLayout";
import { initialState, ResumeData } from "@/constant/types";
import resumeData from "@/constant/resumeData";


export const PortfolioContext = createContext<ResumeData>(initialState);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <MetadataLayout>
        <PortfolioContext.Provider value={resumeData}>
            {children}
        </PortfolioContext.Provider>
    </MetadataLayout>
  );
}
