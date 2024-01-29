"use client"
import CardWork from "../ui/components/cardWork"
import {useState, useEffect} from 'react'
import {motion, AnimatePresence, useIsPresent} from 'framer-motion'


export default function Work(){

    const [selectedId, setSelectedId] = useState<string|null>(null)
    const [selected, setSelected] = useState<boolean>(false)
    const [item,setItem] = useState<Trabajos|null>(null)

    const isPresent = useIsPresent()

    useEffect(() => {
        console.log('Is Present')
        !isPresent && console.log("I've been removed!")
    }, [isPresent])

    interface Trabajos {
        id:string,
        titulo:string,
        boton:string,
        estado:boolean,
        texto:string
    }

    let trabajos:Trabajos[] = [
        {id:'1-work',titulo:'Desarrollador web - Circular HR',boton:'Esto es lo que hago',estado:true, texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:'2-work',titulo:'Otras experiencias fuera del desarrollo',boton:'Esto te puede interesar',estado:true, texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.'},
        {id:'3-work',titulo:'Otras experiencias fuera del desarrollo',boton:'Esto te puede interesar',estado:true, texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.'},
        {id:'4-work',titulo:'Otras experiencias fuera del desarrollo',boton:'Esto te puede interesar',estado:true, texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.'},
        {id:'5-work',titulo:'Otras experiencias fuera del desarrollo',boton:'Esto te puede interesar',estado:true, texto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.'}
    ]

    const selectId = (id:string|null) =>{        
        setItem(trabajos.filter(i=>i.id === id)[0])
        setSelected(true)
        setSelectedId(id)
    }
    
    return(
        <motion.div layout layoutRoot className='w-[80svw] mt-[8svh] flex flex-wrap justify-center overflow-scroll max-h-[55svh]'>
            
            {trabajos.map(item=>{
                return(
                    <CardWork
                        id={item.id} 
                        texto={item.titulo}
                        boton={item.boton}
                        selectId={selectId}
                        width="30%"
                    ></CardWork>
                )
            })}

            <AnimatePresence>
                {selectedId && item && 
                    <motion.div layoutId={item.id} className={`card-work expanded flex flex-wrap mx-[10px] mb-[15px] w-[80svw] h-[55svh] p-[15px] absolute`}>
                        <motion.div className="card.header w-full">
                            <motion.h1 className="card-titulo">{item.titulo}</motion.h1>
                        </motion.div>                        
                        <motion.div className="card-body w-full flex p-[15px] flex-col justify-between">
                            <motion.div className="w-full max-h-[30svh] flex-1 overflow-scroll p-[10px]">
                                <motion.p className="card-texto mb-[10px] text-justify">{item.texto}</motion.p>
                            </motion.div>
                            <motion.div className="w-full flex justify-center items-center  p-[10px]">
                                <motion.button 
                                    className="card-boton px-[15px] py-[8px]"
                                    onClick={()=>setSelectedId(null)}
                                >{item.boton}</motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>

        </motion.div> 
    )
}