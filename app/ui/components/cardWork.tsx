"use client"
import {motion, AnimatePresence} from 'framer-motion'
import {useState} from 'react'

interface CardWork {
    id:string,
    width?:string,
    texto:string,
    boton:string,
    selected:string|null,
    selectId:(x:string)=>void
}

export default function CardWork({width,texto,boton,id,selected,selectId}:CardWork){

    const [select,setSelect] = useState(false)

    const hover = {
        hover:{
            x:10,
            y:-10,
            boxShadow: "-10px 10px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.2
            }
        },
        tap:{
            x:0,
            y:0,
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.2
            }
        },
        exit:{
            x:0,
            y:0,
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.2
            }
        }
    }

    return(
        <AnimatePresence>
            <motion.div 
                key={id} 
                layoutId={id} 
                className={`card-work mx-[10px] flex justify-center mb-[15px] sm:w-[40%] w-[80%] cursor-pointer`}
                onClick={()=>selectId(id)}
                variants={hover}
                whileHover={!selected ? 'hover' : 'tap'}
                exit={'exit'}
            >
                <motion.div className="card-body flex sm:p-[15px] p-[5px] flex-col justify-between h-full">
                    <motion.div className="w-full min-h-[10svh] flex justify-center items-center">
                        <motion.p className="text-center sm:text-[1.5em] text-[1em] mb-[10px]">{texto}</motion.p>
                    </motion.div>
                    {/*<motion.div className="w-full flex justify-center items-center">
                        <motion.button 
                            className="card-boton px-[15px] py-[8px]"
                            onClick={()=>selectId(id)}
                        >{boton}</motion.button>
                    </motion.div>*/}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}