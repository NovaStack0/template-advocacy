import { Cinzel } from "next/font/google"

const cinzel = Cinzel({ subsets: ['latin'] })

const EmailSend = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center mb-[41px]">
            <h1 className={`${cinzel.className} text-[24px] font-bold text-primary`}>Entre em contato</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="2" viewBox="0 0 138 2" fill="none">
                <path d="M0 1H138" stroke="#154759" stroke-width="2"/>
            </svg>
        </div>
       
        <div className='bg-violet-600 min-w-[948px] min-h-[413px]'>
        <h1>Send message</h1>
        </div>
    </div>
  )
}

export default EmailSend
