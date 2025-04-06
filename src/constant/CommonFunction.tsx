import { UnderLineTextProps } from "./types"

export const UnderLineText = ({text,className}:UnderLineTextProps) =>{
    return(
        <h2 className={`${className && className} text-2xl md:text-3xl font-bold mb-10 text-center md:text-left underline decoration-sky-500 underline-offset-8`}>
        {text}
      </h2>
    )
}