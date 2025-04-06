'use client'
import { PortfolioContext } from "@/context/PortfolioContext";
import "./globals.css";
import resumeData from "@/constant/resumeData";
import MetadataLayout from "./metaDataLayout";

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
