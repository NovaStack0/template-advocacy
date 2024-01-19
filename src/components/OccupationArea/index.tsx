import { Cinzel } from "next/font/google"

const cinzel = Cinzel({ subsets: ['latin'] })

const OccupationArea = () => {
  return (
    <section className='w-screen h-[418px] bg-bg-secondary'>
        <div className="flex flex-col">
            <div className="self-center flex flex-col items-center">
                <h1 className={`${cinzel.className} text-primary text-[24px] font-[700px] mt-[77px]`}>Área de Atuação</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="2" viewBox="0 0 138 2" fill="none">
                    <path d="M0 1H138" stroke="#154759" stroke-width="2"/>
                </svg>
            </div>
            <div className="mt-[68px] flex justify-center gap-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="131" height="8" viewBox="0 0 131 8" fill="none">
                        <path d="M131 4L-4.52995e-06 3.99999" stroke="#EFBB1F" stroke-width="7"/>
                    </svg>
                    <h2 className={`${cinzel.className} text-secondary text-[18px] font-[700px] mt-[28px]`}>Direito do Consumidor</h2>
                    <p className="w-[260px] text-[16px] font-light">Garantimos que você seja tratado com justiça e equidade. Conte conosco para sua orientação e proteção dos seus direitos</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="131" height="8" viewBox="0 0 131 8" fill="none">
                        <path d="M131 4L-4.52995e-06 3.99999" stroke="#EFBB1F" stroke-width="7"/>
                    </svg>
                    <h2 className={`${cinzel.className} text-secondary text-[18px] font-[700px] mt-[28px]`}>Direito do Consumidor</h2>
                    <p className="w-[260px] text-[16px] font-light">Garantimos que você seja tratado com justiça e equidade. Conte conosco para sua orientação e proteção dos seus direitos</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="131" height="8" viewBox="0 0 131 8" fill="none">
                        <path d="M131 4L-4.52995e-06 3.99999" stroke="#EFBB1F" stroke-width="7"/>
                    </svg>
                    <h2 className={`${cinzel.className} text-secondary text-[18px] font-[700px] mt-[28px]`}>Direito do Consumidor</h2>
                    <p className="w-[260px] text-[16px] font-light">Garantimos que você seja tratado com justiça e equidade. Conte conosco para sua orientação e proteção dos seus direitos</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="131" height="8" viewBox="0 0 131 8" fill="none">
                        <path d="M131 4L-4.52995e-06 3.99999" stroke="#EFBB1F" stroke-width="7"/>
                    </svg>
                    <h2 className={`${cinzel.className} text-secondary text-[18px] font-[700px] mt-[28px]`}>Direito do Consumidor</h2>
                    <p className="w-[260px] text-[16px] font-light">Garantimos que você seja tratado com justiça e equidade. Conte conosco para sua orientação e proteção dos seus direitos</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default OccupationArea
