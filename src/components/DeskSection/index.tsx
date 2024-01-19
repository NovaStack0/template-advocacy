import { Cinzel } from 'next/font/google'
import Image from 'next/image'

const cinzel = Cinzel({ subsets: ['latin'] })

const DeskSection = () => {
  return (
    <section className='w-full h-[648px] flex justify-center items-center'>
      <div className='flex w-full justify-between'>
        <div className='w-[840px] pl-[100px] self-center'>
            <h1 className={`${cinzel.className} text-primary text-[24px] font-semibold`}>Nosso Escritório</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="2" viewBox="0 0 138 2" fill="none" className='mb-[61px]'>
                <path d="M0 1H138" stroke="#154759" stroke-width="2"/>
            </svg>

            <p className='text-secondary mb-[21px]'>+15 ANOS TRABALHANDO EM SOLUÇÕES JURÍDICAS</p>
            <div className='text-black text-[16px] font-light w-[630px] h-[180px] overflow-y-hidden line-'>
                <p className='mb-4'>
                Diante dos desafios impostos pelos novos tempos e da necessidade de uma atuação contextualizada, integramos à nossa abordagem a experiência acumulada ao longo de mais de 25 anos de prática profissional
                </p>
                <p>
                Castro & Silva Advogados transcende a mera combinação de vivências de seus sócios ou a fusão de escritórios independentes. Ele representa uma abordagem inovadora no cenário jurídico, dedicada à nova economia e às influências tecnológicas que moldam nosso contexto atual
                </p>
            </div>
        </div>

        <div>
            <Image src='/assets/desk.png' alt='hand-shake' width={600} height={500}/>
        </div>
      </div>
    </section>
  )
}

export default DeskSection
