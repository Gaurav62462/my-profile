import { UnderLineText } from "@/constant/CommonFunction"
import SendEmailForm from "./SendEmailForm"
import Map from "../Map"

const Contact = () => {
    return (
        <section className="w-full flex justify-center flex-col" id='contact'>
            <UnderLineText text="Contact" />
            <div className="flex md:flex-row flex-col gap-4">
                <div className="md:w-[50%] w-full shadow-[-8px_0px_32px_-2px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-center p-5">
                    <Map />
                </div>
                    <SendEmailForm />
            </div>
        </section>
    )
}

export default Contact