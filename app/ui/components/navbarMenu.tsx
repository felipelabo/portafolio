"use client"
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {motion} from 'framer-motion'

interface Menu {
    handleShow:()=>void;
    show:boolean
}

export default function Menu({handleShow,show}:Menu){

    const pathname = usePathname(); 

    const items:{[key:string]:string | number,link:string}[] = [
        {id:1,name:'Inicio',link:'/'},
        {id:2,name:'Trabajos',link:'/work'},
        {id:3,name:'Conocimientos',link:'/knowledge'},
        {id:4,name:'Sobre mi',link:'/myself'}
    ]

    const contacto:{[key:string]:string | number}[] = [
        {id:1,name:'LinkedIn'},
        {id:2,name:'Github'},
        {id:3,name:'Instagram'}
    ]

    const variant = {
        hidden:{opacity:0, y:-20,transition:{duration:0.2}},
        visible:{
            opacity:1, 
            y: 0,
            transition:{
                duration:0.3,
                delayChildren:0.1,
                staggerChildren:0.05,
                staggerDirection:1
            }},
        exit:{
            opacity:0, 
            y:-20,
            transition:{
                delay:0.1,
                delayChildren:0.15,                
                duration:0.2,
            }}
    }

    const linkVariant = {
        hidden:{opacity:0, x:15},
        visible: {opacity:1, x:0},
        exit:{opacity:0}
    }

    const redesVariant = {
        hidden:{opacity:0, x:-15},
        visible: {opacity:1, x:0, transition:{delay:1}},
        exit:{opacity:0}
    }

    return(
        <motion.div 
            className="w-[100vw] h-[100vh] bg-[--secondary-color] absolute z-40"
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={variant}
            transition={{ duration: 0.2}}
        >
            <motion.div className="flex columns-2">
                <motion.div className="w-1/3 h-[90vh] mt-[10vh]">
                    <motion.div className="flex flex-col items-star justify-end h-full">
                        <motion.ul className="texto-menu-contacto mb-[5vh] ml-[2vw]">
                            {contacto.map(item=>{
                                return <motion.li variants={redesVariant}>{item.name}</motion.li>
                            })}
                        </motion.ul>
                    </motion.div>                    
                </motion.div>
                <motion.div className="w-2/3 h-[90vh] mt-[10vh]">
                    <motion.ul className="texto-menu mr-[2vw]">
                        {items.map((item)=>{
                            return <motion.li variants={linkVariant} className={`texto-menu-link ${ pathname == item.link && 'text-[--bg-color]' }`}>
                                        <Link href={item.link} onClick={handleShow}>{item.name}</Link>
                                    </motion.li>
                        })}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )

}