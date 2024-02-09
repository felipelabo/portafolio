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
        {id:4,name:'Sobre Mi',link:'/myself'}
    ]

    const contacto:{[key:string]:string | number}[] = [
        {id:1,name:'LinkedIn',link:'https://www.linkedin.com/in/felipe-laboren-b69569127/'},
        {id:2,name:'Github',link:'https://github.com/felipelabo'},
        {id:3,name:'Instagram',link:'https://www.instagram.com/felipelabo/'},
        {id:4,name:'Contacto',link:'mailto:felipelaboren93@gmail.com'}
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
                delay:0.3,
                delayChildren:0.15,                
                duration:0.5
            }}
    }

    const linkVariant = {
        hidden:{opacity:0, x:15},
        visible: {opacity:1, x:0},
        exit:{opacity:0}
    }

    const redesVariant = {
        hidden:{opacity:0, x:-15},
        visible: {opacity:1, x:0, transition:{delay:0.3}},
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
            <motion.div className="flex flex-col sm:flex-row">
                <motion.div className="sm:w-1/3 w-full sm:h-[90vh] h-[30svh] sm:order-[1] order-[2] sm:mt-[10vh]">
                    <motion.div className="flex flex-col items-star justify-end h-full">
                        <motion.ul className="texto-menu-contacto mb-[5vh] ml-[2vw]">
                            {contacto.map((item,i)=>{
                                return (
                                    <motion.li key={`redes_${i}`} variants={redesVariant}>
                                        <motion.a className='cursor-pointer' target="_blank" href={`${item.link}`}>{item.name}</motion.a>
                                    </motion.li>
                                )
                            })}
                        </motion.ul>
                    </motion.div>                    
                </motion.div>
                <motion.div className="sm:w-2/3 w-full sm:h-[90vh] h-[60svh] sm:order-[2] order-[1] mt-[10vh] sm:px-[0px] px-[10px]">
                    <motion.ul className="texto-menu mr-[2vw] sm:text-[7svw] text-[10svw]">
                        {items.map((item,i)=>{
                            return (
                                <motion.li 
                                    key={`link_${i}`}
                                    variants={linkVariant} 
                                    className={`texto-menu-link ${ pathname == item.link && 'text-[--bg-color]' } sm:mb-0 mb-[3svh]`}
                                    whileHover={{x:-5,transition:{type: "spring", stiffness: 200}}}
                                >
                                    <Link href={item.link} onClick={handleShow}>{item.name}</Link>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )

}