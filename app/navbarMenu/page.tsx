

export default function Menu(){

    const items:{[key:string]:string | number}[] = [
        {id:1,name:'Inicio'},
        {id:2,name:'Trabajos'},
        {id:3,name:'Conocimientos'},
        {id:4,name:'Sobre mi'}
    ]

    const contacto:{[key:string]:string | number}[] = [
        {id:1,name:'LinkedIn'},
        {id:2,name:'Github'},
        {id:3,name:'Instagram'}
    ]

    return(
        <div className="w-[100vw] h-[100vh] bg-[--secondary-color]">
            <div className="flex columns-2">
                <div className="w-1/3 h-[90vh] mt-[10vh]">
                    <div className="flex flex-col items-star justify-end h-full">
                        <ul className="texto-menu-contacto mb-[5vh] ml-[2vw]">
                            {contacto.map(item=>{
                                return <li>{item.name}</li>
                            })}
                        </ul>
                    </div>                    
                </div>
                <div className="w-2/3 h-[90vh] mt-[10vh]">
                    <ul className="texto-menu mr-[2vw]">
                        {items.map(item=>{
                            return <li className="texto-menu-link">{item.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )

}