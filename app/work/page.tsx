import CardWork from "../ui/components/cardWork"


export default function Work(){

    interface Trabajos {
        id:number,
        titulo:string,
        boton:string,
        estado:boolean
    }

    let trabajos:Trabajos[] = [
        {id:1,titulo:'Desarrollador web - Circular HR',boton:'Esto es lo que hago',estado:true},
        {id:2,titulo:'Otras experiencias fuera del desarrollo',boton:'Esto te puede interesar',estado:true}
    ]
    
    return(
        <div className='w-[70svw] mt-[8svh] flex items-center'>
            {trabajos.map(item=>{
                return(
                    <CardWork 
                        texto={item.titulo}
                        boton={item.boton}
                        width="1/2"
                    ></CardWork>
                )
            })}
        </div> 
    )
}