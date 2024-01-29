"use client"
import Banner from '@/app/ui/components/banner'
export default function Home() {

  const banner = 'JavaScript HTML CSS JQuery Tailwind Bootstrap Git ReactJs TypeScript MySql SDK-AWS NextJs'

  return(
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='w-[100vw] flex justify-center items-center z-10 py-[100px] bg-gradiente'>
        <h1 className='texto-portada'>Desarrollador<br/><span className='texto-portada-var'>Web</span></h1>
      </div>
      <Banner texto={banner}/>      
    </div>    
  )
}
