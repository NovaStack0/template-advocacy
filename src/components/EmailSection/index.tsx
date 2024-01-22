import EmailSend from '../EmailSend'
import Telephone from '../Icons/Telephone'
import Mail from '../Icons/Mail'

const EmailSection = () => {
  return (
    <section className='h-screen'>
      <div className='flex flex-col h-full relative'>
        <div className='h-[80%]'>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <EmailSend />
        </div>
        <div className='bg-secondary h-[20%] flex items-end'>
          <div className='mx-[100px] flex justify-between w-full my-[35px]'>
            <p className='text-[14px] font-light text-white'><span className='text-primary'>©</span> Castro & Santos - 2023 Todos os direitos reservados</p>
            <div className='flex gap-3'>
              <div className='flex items-center gap-1'>
                <Telephone />
                <p className='text-[14px] font-light text-white'>(11) 94001-0011</p>
              </div>
              <div className='flex items-center gap-1'>
                <Mail />
                <p className='text-[14px] font-light text-white'>contato@castroesantos.com.br</p>
              </div>  
            </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default EmailSection
