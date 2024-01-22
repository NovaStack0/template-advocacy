import { Cinzel } from "next/font/google"
import { IOcuppationArea, Occupations } from "../../data/OccupationArea"
import BarPrimary from "../BarPrimary"
import BarSecondary from "../BarSecondary"

const cinzel = Cinzel({ subsets: ['latin'] })

const OccupationArea = () => {
  return (
    <>
        <section className='w-screen h-[418px] bg-bg-secondary'>
            <div className="flex flex-col">
                <div className="self-center flex flex-col items-center">
                    <h1 className={`${cinzel.className} text-primary text-[24px] font-[700px] mt-[77px]`}>Área de Atuação</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="138" height="2" viewBox="0 0 138 2" fill="none">
                        <path d="M0 1H138" stroke="#154759" stroke-width="2"/>
                    </svg>
                </div>
                <div className="mt-[68px] flex justify-center mx-[100px] gap-10">
                    {Occupations.map((item: IOcuppationArea)=> (
                        <div key={item.id} className="mb-[20px]">
                        {item.color === 'primary' ? <BarPrimary /> : <BarSecondary />}
                        <h2 className={`${cinzel.className} text-secondary text-[18px] font-[700px] mt-[28px]`}>{item.title}</h2>
                        <p className="w-[260px] text-[16px] font-light">{item.description}</p>
                    </div>
                    ))}
                </div>  
            </div>
        </section>
        <div className="w-screen flex">
            <div className="h-1 bg-primary w-1/2" />
            <div className="h-1 bg-secondary w-1/2" />
        </div>
       
     </>
  )
}

export default OccupationArea
