"use client"
import Menu from "@/app/ui/components/navbarMenu"
import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useRouter} from 'next/navigation'

export default function NavBar(){

    const router = useRouter();
    const [show,setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
    }

    const hover = {
        init:{
            x:5,
            y:-5,
            boxShadow: "-5px 5px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.1,
                ease:'linear'
            }
        },
        tap:{
            x:-2,
            y:2,
            boxShadow: "-0px 0px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.1,
                ease:'linear'
            }
        },
        hover:{
            x:4,
            y:-4,
            boxShadow: "-4px 4px 0px 0px rgba(0,0,0,1)",
            transition:{
                duration:0.2,
                ease:'linear'
            }
        },
        
    }

    return (
        <>
            <motion.nav className="fixed w-[100svw] flex mx-auto justify-between items-center p-2 z-50">
                {/*Logo*/}
                <motion.div className="p-3 ml-2">
                    <motion.button
                        className="navbar-titulo text-2xl"
                        variants={hover}
                        whileTap={'tap'}
                        initial={false}
                        onClick={() => router.push('/')}
                        
                    >
                        Felipe Laboren
                    </motion.button>
                </motion.div>
                <motion.button
                    className={`navbar-button flex justify-center items-center mr-3  ${show ? 'border-[--primary-color]' : 'border-[--bg-color]' } border-[3px] rounded-[15px] transform transition-all duration-[100ms] `}
                    onClick={handleShow}
                >
                    Menú
                </motion.button>
                
            </motion.nav>         
            <AnimatePresence>
                {show && <Menu handleShow={handleShow} show={show}/>}
            </AnimatePresence>            
        </>                
    )
}