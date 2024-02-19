"use client"
import Banner from '@/app/ui/components/banner'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'

export default function Home() {

  const banner = 'JavaScript HTML CSS JQuery Tailwind Bootstrap Git ReactJs TypeScript MySql SDK-AWS NextJs'
  const router = useRouter()
  const variant = {
    hidden:{opacity:0,transition:{duration:1.5}},
    animate:{opacity:1,transition:{duration:1.5}},
    exit:{opacity:0,transition:{duration:0.5}}
  }

  return(
    <motion.div 
      className='w-[100vw] h-[100svh] flex justify-center items-center relative overflow-hidden'
      variants={variant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <motion.div className='w-[100svw] overflow-hidden grid justify-center relative z-10 py-[100px] bg-gradiente'>
        <motion.div className='sm:mb-0 mb-[20px] text-[15svw] sm:text-[12svw]'>
          <motion.h1 className='texto-portada'>
            Desarrollador<motion.br/><motion.span className='texto-portada-var'>Web</motion.span>
          </motion.h1>
        </motion.div>        
        <motion.div className='justify-self-end relative'>
          <motion.h2 className='subtexto-portada sm:text-[3svw] text-[6svw]'>Desarrollador Front-End<motion.br/> y Full-Stack</motion.h2>
        </motion.div>
        <motion.button 
          className='boton-portada absolute sm:text-[2svw] text-[5svw] right-[20svw] sm:bottom-[7svh] bottom-[4svh]'
          onClick={() => router.push('/work')}
        >
              Conoce mi experiencia
        </motion.button>
      </motion.div>
      <Banner texto={banner}/>      
    </motion.div>    
  )
}
