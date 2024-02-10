"use client"
import Banner from '@/app/ui/components/banner'
import {motion} from 'framer-motion'

export default function Home() {

  const banner = 'JavaScript HTML CSS JQuery Tailwind Bootstrap Git ReactJs TypeScript MySql SDK-AWS NextJs'
  const variant = {
    hidden:{opacity:0,transition:{duration:1.5}},
    animate:{opacity:1,transition:{duration:1.5}},
    exit:{opacity:0,transition:{duration:0.5}}
  }

  return(
    <motion.div 
      className='w-[100vw] h-[100vh] flex justify-center items-center relative overflow-hidden'
      variants={variant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <motion.div className='w-[100svw] overflow-hidden flex justify-center items-center z-10 py-[100px] bg-gradiente'>
        <motion.h1 className='texto-portada'>
          Desarrollador<motion.br/>
          <motion.span className='texto-portada-var'>Web</motion.span>
        </motion.h1>
      </motion.div>
      <Banner texto={banner}/>      
    </motion.div>    
  )
}
