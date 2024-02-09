"use client"
import CardWork from "../ui/components/cardWork"
import {useState, useEffect} from 'react'
import {motion, AnimatePresence, useIsPresent} from 'framer-motion'
import {circular, electronica} from '@/app/data/texto/work'


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
        codigo:string,
        titulo:string,
        boton:string,
        estado:boolean,
        texto:string,
        anno:string,
        duracion?:string
    }

    let trabajos:Trabajos[] = [
        {id:'1-work',codigo:'EMP',anno:'Desde 2020',titulo:'Desarrollador Full-Stack en Circular HR',boton:'Esto es lo que hago',estado:true, texto:circular},
        {id:'2-work',codigo:'ING',anno:'Desde 2017',duracion:'3 años',titulo:'Ingeniero de Desarrollo en Unisource',boton:'Esto fue lo que hice',estado:true, texto:electronica},
    ]

    const areas = [
        {titulo:'Desarrollo Web', codigo:'EMP'},
        {titulo:'Ingeniero Electrónico', codigo:'ING'}
    ]

    const selectId = (id:string|null) =>{        
        setItem(trabajos.filter(i=>i.id === id)[0])
        setSelected(true)
        setSelectedId(id)
    }
    
    return(
        <motion.div layout layoutRoot className='w-[100svw] sm:px-[100px] px-[20px] flex sm:flex-wrap sm:flex-row flex-col sm:justify-center justify-start sm:items-stretch items-center overflow-scroll sm:max-h-[100svh] max-h-[70svh] p-[20px]'>
            
            {areas.map((area,i)=>{
                return(
                    <motion.div className="w-full ">
                        <motion.h1 className="word-resalta text-[10svw] sm:text-[5svw]">{area.titulo}</motion.h1>
                        <motion.div layout layoutRoot className='w-full flex sm:flex-wrap sm:flex-row flex-col sm:justify-center justify-start sm:items-stretch items-center p-[20px]'>
                            {trabajos.map(item=>{
                                if(area.codigo == item.codigo){
                                    return(
                                        <CardWork
                                            id={item.id} 
                                            texto={item.titulo}
                                            boton={item.boton}
                                            selectId={selectId}
                                            selected={selectedId}
                                            width="30%"
                                        ></CardWork>
                                    )
                                }
                            })}
                        </motion.div>
                    </motion.div>
                )
            })}

            <AnimatePresence>
                {selectedId && item && 
                    <motion.div key={`modal_${item.id}`} layoutId={item.id} className={`card-work expanded flex flex-wrap mx-[10px] mb-[15px] sm:w-[85svw] w-[90svw] sm:h-[60svh] h-[70svh] p-[15px] absolute`}>
                        <motion.div className="card-header w-full flex justify-between">
                            <motion.h1 className="card-titulo">{item.titulo}</motion.h1>
                            <motion.h1 className="card-titulo">{`${item.anno} ${item.duracion ? `(${item.duracion})` : ''}`}</motion.h1>
                        </motion.div>                        
                        <motion.div className="card-body w-full flex p-[15px] flex-col justify-between">
                            <motion.div className="w-full sm:max-h-[37svh] max-h-[40svh] flex-1 overflow-scroll p-[10px]">
                                <motion.p className="sm:text-[1.7svw] text-[4svw] mb-[10px] text-justify whitespace-pre-wrap">{item.texto}</motion.p>
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