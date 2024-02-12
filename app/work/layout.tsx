"use client"
import {motion} from 'framer-motion'

export default function workLayout({children}: {children: React.ReactNode}) {

    const variantPage = {
        start:{opacity:0,transition:{duration:1.5}},
        animate:{opacity:1,transition:{duration:1.5}},
        exit:{opacity:0,transition:{duration:0.5}}
    }

    return(
        <motion.div 
            className='w-[100vw] h-[100vh] flex flex-col sm:px-[2svw] px-[5svw] sm:pb-0 pb-[10px] items-center'
            variants={variantPage}
            initial="start"
            animate="animate"
            exit="exit"
        >
            <motion.div className="w-full mt-[9svh]">
                <motion.h1 className="texto-titulos text-[10svw] sm:text-[7svw]">Trabajos</motion.h1>
            </motion.div>
            {children}
        </motion.div> 
    )
}