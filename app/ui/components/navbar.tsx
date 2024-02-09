"use client"
import Menu from "@/app/ui/components/navbarMenu"
import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'

export default function NavBar(){

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
            <motion.div className="fixed w-full flex mx-auto justify-between items-center p-2 z-50">
                {/*Logo*/}
                <motion.div className="p-3 ml-2">
                    <motion.button
                        className="navbar-titulo text-2xl"
                        variants={hover}
                        whileTap={'tap'}
                        initial={false}
                        
                    >
                        <Link href={'/'}>Felipe Laboren</Link>
                    </motion.button>
                </motion.div>
                <motion.button
                    className={`navbar-button flex justify-center items-center mr-3  ${show ? 'border-[--primary-color]' : 'border-[--bg-color]' } border-[3px] rounded-[15px] transform transition-all duration-[100ms] `}
                    onClick={handleShow}
                >
                {/*<button 
                    className={`p-3 flex justify-center items-center mr-3 border-[3px] ${show ? 'border-[--primary-color]' : 'border-[--secondary-color]'} rounded`}
                    onClick={handleShow}
                >*/}
                    Menú
                    {/*<div className=" flex flex-col justify-between items-center w-[45px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150`}></div>
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 rounded transform transition-all duration-300 group-focus:translate-x-10`}></div>
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150`}></div>
                    </div>*/}
                </motion.button>
            </motion.div>
            <AnimatePresence>
                {show && <Menu handleShow={handleShow} show={show}/>}
            </AnimatePresence>            
        </>                
    )
}