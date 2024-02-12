"use client"
import {motion, AnimatePresence} from 'framer-motion'
import {useState, useEffect, useRef} from 'react'
import useWindowResize from '@/app/ui/hooks/useWindowResize'
import {variant, variantInfo, listaPalabras, contenido, palabras, Known, Contenido, Descripcion} from '@/app/data/texto/knowledge'

const MAX_MOBILE_WIDTH = 600;

export default function Knownledge(){

    const [selectedId, setSelectedId] = useState<string|boolean>(false)
    const isMobile = useWindowResize(MAX_MOBILE_WIDTH);

    return (
        <motion.div className="w-[100svw] h-full overflow-scroll relative">
            <AnimatePresence>
                {!isMobile && !selectedId && !(typeof selectedId == 'string')  && listaPalabras.map((item:Known,j)=>{
                    return (
                        <motion.div 
                            key={`letras_${j}`}
                            className={`filas-texto w-full leading-[1.35em]`} 
                            variants={variant} 
                            animate={j%2==0 ? 'startRight' : 'startLeft'} 
                            initial={false}
                            exit={j%2==0 ? 'exitRight' : 'exitLeft'}
                        >
                            <motion.p className={`inline-block ${j%2==0 ? 'translate-x-[-30px]' : ''}`}>{item.texto.split(" ").map((palabra:string,i)=>{
                                if(item.resalta.some(q=>q==i+1)) return <motion.button key={`pal_${i}_${j}`} whileTap={{x:-2,y:2,textShadow:'0px 0px 0px var(--primary-color)',transition:{duration:0.1}}} className="word-resalta" onClick={()=>setSelectedId(palabra)} >{palabra+'  '}</motion.button>
                                return <motion.span key={`pal_${i}_${j}`} className="word">{' '+palabra+' '}</motion.span>
                            })}</motion.p>
                            
                        </motion.div>
                    )
                })}
                {isMobile && !selectedId && !(typeof selectedId == 'string')  && 
                        palabras.map((palabra:string,j)=>{
                            return (
                                <motion.button 
                                    key={`letras_${j}`} 
                                    className="word-resalta w-full text-[11svw]" 
                                    onClick={()=>setSelectedId(palabra)} 
                                    variants={variant} 
                                    animate={j%2==0 ? 'startRight' : 'startLeft'} 
                                    initial={false}
                                    exit={j%2==0 ? 'exitRight' : 'exitLeft'}
                                >   
                                    {palabra}
                                    
                                </motion.button>
                            )
                        })
                }
                {(typeof selectedId == 'string') && <motion.div 
                    key={'descripcion'}
                    className='absolute text-[100px] w-full h-full' 
                    variants={variantInfo}
                    initial={'start'}
                    animate={'animate'}
                    exit={'exit'}
                >
                    {contenido.filter(i=>i.palabra.includes(selectedId)).map((item:Contenido,i)=>{
                        return(
                            <motion.div key={`info_${i}`} className='sm:px-[100px] px-[35px] overflow-scroll h-full w-full flex flex-col'>
                                <motion.h1 className='known-titulo mb-[25px] text-[10svw] sm:text-[5.5svw]'>{item.palabra}</motion.h1>
                                <motion.div className='overflow-scroll'>
                                    <motion.p className='known-texto sm:text-[1.7svw] text-[4.5svw] mb-[3svh]'>{item.texto}</motion.p>
                                    {item.descripcion?.map((res:Descripcion,m)=>{
                                        return (
                                            <>
                                                <motion.h1 className={`sm:text-[2.5svw] text-[4.5svw] text-[var(--secondary-color)]`}>{res.titulo}</motion.h1>
                                                { res.descripcion && <motion.p className='sm:text-[1.7svw] text-[4.5svw] mb-[3svh]'>{res.descripcion}</motion.p>}
                                            </>
                                        )
                                    })}
                                </motion.div>
                                <motion.button 
                                    className='known-boton my-[15px] w-fit self-center'
                                    onClick={()=>setSelectedId(false)}
                                >Volver</motion.button>
                            </motion.div>
                            
                        )
                    })}
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}