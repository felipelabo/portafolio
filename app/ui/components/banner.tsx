import {motion} from 'framer-motion'

interface Banner {
    texto:string
}

export default function Banner({texto}:Banner){

    const nuevoTexto = texto.split(' ');
    const count = nuevoTexto.length;

    return(
        <div className='absolute z-0' style={{overflow:'hidden'}}>
        <motion.div    
          className="inline-block" 
          layout
          style={{overflow:'hidden',whiteSpace:'nowrap'}}
          initial={{x:"25%"}}
          animate={{x:"-25%"}}
          transition={{
            duration:20,
            repeat:Infinity,
            ease:'linear'
          }}
        >
          <motion.div 
            className="inline-block"        
          >
            <p className='inline-block'>
                {nuevoTexto.map((item,i)=>{
                    return <span className={`ml-4 ${i%2===0 ? 'bn-par' : 'bn-inpar'}`}>{`${item}`}</span>
                })}
            </p>             
          </motion.div>
          <motion.div 
            className="inline-block"           
          >
            <p className='inline-block'>
                {nuevoTexto.map((item,i)=>{
                    return <span className={`ml-4 ${i%2===0 ? 'bn-par' : 'bn-inpar'}`}>{`${item}`}</span>
                })}
            </p>              
          </motion.div>
        </motion.div>
      </div>
    )
}