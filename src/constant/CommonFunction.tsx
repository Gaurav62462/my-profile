import { ChipProps, UnderLineTextProps } from "./types"

export const UnderLineText = ({text,className}:UnderLineTextProps) =>{
    return(
        <h2 className={`${className && className} text-2xl md:text-3xl font-bold mb-10 text-center md:text-left underline decoration-sky-500 underline-offset-8`}>
        {text}
      </h2>
    )
}

export const Divider = () =>{
  return(
      <hr className="h-px my-8 border-0 bg-[#e7e2e2]"></hr>
  )
}

export const CustomChip = ({label}:ChipProps) =>{
  return(
  <div className="cursor-pointer text-[12px] py-[7px] md:px-[20px] px-[10px] flex items-center justify-center rounded-[30px] bg-blue_200 text-white">{label}</div>
  )
}