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
       
        <div className='bg-white min-w-[948px] min-h-[413px]'>
          <div className="mt-[64px] flex justify-center flex-col items-center">
            <div className="flex gap-1">
              <input type="text" className="w-[808px] h-[50px] bg-input p-3 focus:outline-none" placeholder="Nome:" />
            </div>
            <div className="flex mt-[29px] w-[808px] gap-[30px] ">
              <input type="text" className="w-[389px] h-[50px] p-3 focus:outline-none bg-input" placeholder="Telefone:"/>
              <input type="text" className="w-[389px] h-[50px] p-3 focus:outline-none bg-input" placeholder="Email:"/>
            </div>
            <div className="mt-[32px]">
              <textarea placeholder="Mensagem:" className="p-3 w-[808px] h-[127px] focus:outline-none bg-input"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EmailSend
