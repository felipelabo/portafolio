"use client"
import Menu from "@/app/ui/components/navbarMenu"
import {useState} from 'react'
import {AnimatePresence} from 'framer-motion'

export default function NavBar(){

    const [show,setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
    }

    return (
        <>
            <div className="fixed w-full flex mx-auto justify-between items-center p-2 z-10">
                {/*Logo*/}
                <div className="p-3 ml-2">
                    <h1 className="text-2xl">Felipe Laboren</h1>
                </div>
                {<button 
                    className={`p-3 flex justify-center items-center mr-3 border-[3px] ${show ? 'border-[--primary-color]' : 'border-[--secondary-color]'} rounded`}
                    onClick={handleShow}
                >
                    <div className=" flex flex-col justify-between items-center w-[45px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150`}></div>
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 rounded transform transition-all duration-300 group-focus:translate-x-10`}></div>
                        <div className={` ${show ? 'bg-[--primary-color]' : 'bg-[--secondary-color]'} h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150`}></div>
                    </div>
                </button>}
            </div>
            <AnimatePresence>
                {show && <Menu handleShow={handleShow} show={show}/>}
            </AnimatePresence>            
        </>                
    )
}