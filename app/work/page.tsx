"use client"
import CardWork from "../ui/components/cardWork"
import {useState, useEffect} from 'react'
import {motion, AnimatePresence, useIsPresent} from 'framer-motion'
import {circular, electronica, persona} from '@/app/data/texto/work'
import useWindowResize from '@/app/ui/hooks/useWindowResize'

const MAX_MOBILE_WIDTH = 600;

export default function Work(){

    const [selectedId, setSelectedId] = useState<string|null>(null)
    const [selected, setSelected] = useState<boolean>(false)
    const [item,setItem] = useState<Trabajo|null>(null)

    const isPresent = useIsPresent()
    const isMobile = useWindowResize(MAX_MOBILE_WIDTH);

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
        {id:'2-work',codigo:'ING',anno:'Desde 2017',titulo:'Ingeniero de Desarrollo en Unisource',boton:'Esto fue lo que hice',estado:true, texto:electronica},
        {id:'3-work',codigo:'PER',anno:'2024',titulo:'Portafolio Profesional',boton:'Esto fue lo que hice',estado:true, texto:persona},
    ]

    const areas = [
        {titulo:'Desarrollo Web - Empresa', codigo:'EMP'},
        {titulo:'Desarrollo Web - Personales', codigo:'PER'},
        {titulo:'Ingeniero Electrónico', codigo:'ING'}
    ]

    const selectId = (id:string|null) =>{        
        setItem(trabajoss.filter((i:Trabajo)=>i.id === id)[0])
        setSelected(true)
        setSelectedId(id)
        console.log('id:',id)
    }

    /**
     *  NUEVA PRUEBA
     * 
     */

    interface Trabajo {
        id:string,
        titulo:string,
        subtitulo:string, 
        empresa?:string,
        codigo:string,
        tags:string[],
        texto:string,
        boton?:string
    }

    const trabajoss:Trabajo[] = [
        {
            id:'work_1',
            titulo:'Consultor de desarollo',
            subtitulo:'Desarrollo Full-Stack', 
            empresa:'Circular HR',
            codigo:'EMP',
            tags:['ReactJS','Typescript','AdonisJS','SQL','JQuery','JavaScript','HTML','CSS'],
            texto:circular,
            boton:'Volver'
        },
        {
            id:'work_2',
            titulo:'Protafolio Profesional',
            subtitulo:'Desarrollo Front-End', 
            codigo:'PER',
            tags:['NextJs','ReactJS','Typescript','HTML','CSS'],
            texto:persona,
            boton:'Volver'
        },
        {
            id:'work_3',
            titulo:'Ingeniero de Desarrollo',
            subtitulo:'Ingeniero Electrónico', 
            empresa:'Unisource',
            codigo:'ING',
            tags:['Python','C++','Electrónica'],
            texto:electronica,
            boton:'Volver'
        }
    ]

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
        <motion.div layout layoutRoot className='w-[100svw] sm:px-[100px] px-[20px] flex sm:flex-wrap sm:flex-row flex-col sm:justify-center justify-start sm:items-stretch items-center overflow-scroll sm:max-h-[100svh] h-full mb-[50px] sm:mb-0 p-[20px]'>
            
            {/*areas.map((area,i)=>{
                return(
                    <motion.div key={`area_${i}`} className="w-full sm:flex sm:items-center ">
                        <motion.h1 className="word-resalta text-[7svw] sm:text-[3svw] sm:w-[30%]">{area.titulo}</motion.h1>
                        <motion.div layout layoutRoot className='w-full sm:w-[70%] flex  sm:flex-wrap sm:flex-row flex-col sm:justify-start justify-start sm:items-stretch items-center p-[20px]'>
                            {trabajos.map((item,k)=>{
                                if(area.codigo == item.codigo){
                                    return(
                                        <CardWork
                                            key={`card_${k}`}
                                            id={item.id} 
                                            texto={item.titulo}
                                            boton={item.boton}
                                            selectId={selectId}
                                            selected={selectedId}
                                        ></CardWork>
                                    )
                                }
                            })}
                        </motion.div>
                    </motion.div>
                )
            })*/}

            {trabajoss.map((trabajo)=>{
                return(
                    <motion.div 
                        key={trabajo.id} 
                        layoutId={trabajo.id} 
                        className={`card-work mx-[10px] mb-[15px] sm:w-[40%] w-[80%] cursor-pointer p-[20px]
                            grid grid-rows-3 grid-cols-1 gap-y-[10px]
                            relative
                        `}
                        onClick={()=>selectId(trabajo.id)}
                        variants={hover}
                        whileHover={!selected ? 'hover' : 'tap'}
                        exit={'exit'}
                    >
                        <motion.div className="card-head">
                            <motion.h1 className="card-titulo sm:text-[2.5svw] text-[5.5svw]">{trabajo.titulo}</motion.h1>
                        </motion.div>
                        <motion.div className="card-body flex flex-col sm:justify-between">
                            <motion.h2 className="sm:text-[1.8svw] text-[5svw]">{trabajo.subtitulo}</motion.h2>
                            {trabajo.empresa && <motion.h2 className="sm:text-[1.8svw] text-[5svw]">Empresa: {trabajo.empresa}</motion.h2>}
                        </motion.div>
                        <motion.div>
                            <motion.p className="flex flex-wrap">
                                {trabajo.tags.map(tag=><motion.span className="card-tag sm:text-[1.3svw] text-[4svw] mx-[2px] mb-[3px] px-[10px]">{tag}</motion.span>)}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )
            })}

            <AnimatePresence>
                {/*selectedId && item && 
                    <motion.div key={`modal_${item.id}`} layoutId={item.id} className={`card-work expanded flex flex-wrap mx-[10px] mb-[15px] sm:w-[85svw] w-[90svw] sm:h-[60svh] h-[70svh] p-[15px] absolute`}>
                        <motion.div className="card-header w-full flex justify-between">
                            <motion.h1 className="card-titulo text-left sm:text-[2svw] text-[5.5svw]">{item.titulo}</motion.h1>
                            <motion.h1 className="card-titulo text-right sm:text-[2svw] text-[5.5svw]">{`${item.anno} ${item.duracion ? `(${item.duracion})` : ''}`}</motion.h1>
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
                */}
                {selectedId && item && 
                    <motion.div 
                        key={`modal_${item.id}`} layoutId={item.id} 
                        className={`card-work expanded mx-[10px] mb-[15px] sm:w-[90svw] w-[90svw] sm:h-[60svh] h-[70svh] p-[15px] absolute
                            grid sm:grid-rows-6 grid-rows-7 grid-cols-1 gap-y-[10px]
                        `}
                    >
                        <motion.div className="card-header row-span-1 flex justify-center items-center">
                            <motion.h1 className="card-titulo sm:text-[2.5svw] text-[5.5svw]">{item.titulo}</motion.h1>
                        </motion.div>                        
                        {!isMobile && <motion.div className={`card-body w-full flex p-[15px] flex-col justify-between row-span-5
                            grid grid-rows-3 grid-cols-4
                        `}>
                            <motion.div className={`w-full overflow-scroll p-[10px] col-span-1 row-span-3
                                grid grid-rows-4 grid-cols-1
                            `}>
                                <motion.div className="row-span-2 text-[var(--bg-color)]">
                                    <motion.h2 className="sm:text-[1.8svw] text-[5svw]">{item.subtitulo}</motion.h2>
                                    {item.empresa && <motion.h2 className="sm:text-[1.8svw] text-[5svw]">Empresa: {item.empresa}</motion.h2>}
                                </motion.div>
                                <motion.div>
                                    <motion.p className="flex flex-wrap">
                                        {item.tags.map(tag=><motion.span className="card-tag sm:text-[1.3svw] text-[4svw] mx-[2px] mb-[3px] px-[10px]">{tag}</motion.span>)}
                                    </motion.p>
                                </motion.div>
                                <motion.div className="card-bottom row-span-1 flex items-end justify-center">
                                    <motion.button 
                                        className="card-boton px-[15px] py-[5px]"
                                        onClick={()=>setSelectedId(null)}
                                    >{item.boton}</motion.button>
                                </motion.div>
                            </motion.div>

                            <motion.div className="w-full overflow-scroll p-[10px] col-span-3 row-span-3">
                                <motion.p className="sm:text-[1.7svw] text-[4svw] mb-[10px] text-justify whitespace-pre-wrap">{item.texto}</motion.p>
                            </motion.div>
                            
                        </motion.div>}
                        
                        {isMobile && <motion.div className={`card-body w-full flex p-[15px] flex-col justify-between row-span-6
                            grid grid-rows-6 grid-cols-1
                        `}>
                            <motion.div className="row-span-1 text-[var(--bg-color)]">
                                    <motion.h2 className="sm:text-[1.8svw] text-[5svw]">{item.subtitulo}</motion.h2>
                                    {item.empresa && <motion.h2 className="sm:text-[1.8svw] text-[5svw]">Empresa: {item.empresa}</motion.h2>}
                            </motion.div>

                            <motion.div className="w-full overflow-scroll col-span-3 row-span-4">
                                    <motion.p className="sm:text-[1.7svw] text-[4svw] mb-[10px] text-justify whitespace-pre-wrap">{item.texto}</motion.p>
                            </motion.div>

                            <motion.div className={`w-full overflow-scroll p-[10px] col-span-1 row-span-1
                                grid grid-rows-1 grid-cols-3
                            `}>
                                
                                
                                <motion.div className="col-span-2 flex items-center">
                                    <motion.p className="flex flex-wrap">
                                        {item.tags.map(tag=><motion.span className="card-tag sm:text-[1.3svw] text-[3svw] mx-[2px] mb-[3px] px-[10px]">{tag}</motion.span>)}
                                    </motion.p>
                                </motion.div>
                                <motion.div className="card-bottom row-span-1 flex items-center justify-center col-span-1">
                                    <motion.button 
                                        className="card-boton px-[15px] py-[5px]"
                                        onClick={()=>setSelectedId(null)}
                                    >{item.boton}</motion.button>
                                </motion.div>
                            </motion.div>
                            
                        </motion.div>}

                    </motion.div>
                }
            </AnimatePresence>

        </motion.div> 
    )
}