"use client"
import {motion} from 'framer-motion'
import {useState} from 'react'

interface CardWork {
    id:string,
    width?:string,
    texto:string,
    boton:string,
    selectId:(x:string)=>void
}

export default function CardWork({width,texto,boton,id,selectId}:CardWork){

    const [select,setSelect] = useState(false)

    return(
        <motion.div key={id} layoutId={id} className={`card-work mx-[10px] flex justify-center mb-[15px] w-[30%]`}>
            <motion.div className="card-body flex p-[15px] flex-col justify-between h-full">
                <motion.div className="w-full min-h-[10svh]">
                    <motion.p className="card-texto mb-[10px]">{texto}</motion.p>
                </motion.div>
                <motion.div className="w-full flex justify-center items-center">
                    <motion.button 
                        className="card-boton px-[15px] py-[8px]"
                        onClick={()=>selectId(id)}
                    >{boton}</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}