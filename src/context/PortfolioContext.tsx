import { createContext } from "react";
import { ResumeData, initialState } from "@/constant/types";

export const PortfolioContext = createContext<ResumeData>(initialState);
