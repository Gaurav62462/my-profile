import SendEmailForm from "./SendEmailForm"

const Contact = () =>{
    return(
        <section className="w-full flex justify-center flex-col" id='contact'>
            <h2 className='bg-white text-[32px] font-bold pb-10'>
            Contact
            </h2>
                <SendEmailForm />
        </section>
    )
}

export default Contact