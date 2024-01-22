import { Header } from '@/components/Header'
import Image from 'next/image'
import DeskSection from '../components/DeskSection'
import OccupationArea from '../components/OccupationArea'
import EmailSection from '../components/EmailSection'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white'>
      <Header />
      <DeskSection />
      <OccupationArea />
      <EmailSection />
    </div>
  )
}
