import { Clients } from '@/utils/types'
import Image from 'next/image'

interface ClientCardProps {
    clientDetails: Clients,
    index: number
}

const ClientDetailsCard = ({clientDetails,index}:ClientCardProps) => {
const zeroPad = (num:number) => String(num).padStart(2, '0')
  return (
    <div className={`flex flex-wrap mx-auto w-fit mb-10 lg:mb-0 ${index % 2 === 0? 'lg:flex-row-reverse':''}`}>
      <Image src={clientDetails.img} alt={clientDetails.title} width={544} height={600} className='object-scale-down'/>
      <div className={`max-w-[544px] flex flex-col justify-center ${index %2 === 0?'lg:pr-[55px]':'lg:pl-[55px]'}`}>
        <h1 className='text-[#92ABD6] opacity-30 lg:mb-3 mb-1 number'>{zeroPad(index)}</h1>
        <h2 className='lg:text-[40px] text-[26px] text-[#92ABD6] lg:mb-[20px] mb-[10px] leading-none'>{clientDetails.title}</h2>
        <p className='text-[#748099] lg:text-[18px] text-[14px] lg:mb-8 mb-2'>{clientDetails.description}</p>
        <div className='grid lg:grid-cols-2 gap-2.5 lg:gap-4'>
            {clientDetails.points.map((point,i)=>(
                <div key={i} className='flex items-start gap-3 text-[#323E59]'>
                    <Image src="/clients/points-icon.svg" alt='check icon' width={20} height={20}/>
                    <p className='lg:text-[18px] text-[14px]'>{point}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ClientDetailsCard
