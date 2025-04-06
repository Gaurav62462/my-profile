import { UnderLineText } from "@/constant/CommonFunction"
import SendEmailForm from "./SendEmailForm"

const Contact = () =>{
    return(
        <section className="w-full flex justify-center flex-col" id='contact'>
            <UnderLineText text="Contact" />
                <SendEmailForm />
        </section>
    )
}

export default Contact