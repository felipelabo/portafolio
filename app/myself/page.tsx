export default function Myself(){

    interface Timeline {
        id:number,
        year:string,
        texto:string
    }

    const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    
    const timeline: Timeline[] = [
        {id:1,year:'1993',texto:'Nacimiento'},
        {id:1,year:'2010',texto:'Ingreso a la Universidad'},
        {id:1,year:'2016',texto:'Graduación de Ingeniero Electricista'},
        {id:1,year:'2016',texto:'Primera migración'},
        {id:1,year:'2017',texto:'Primer trabajo como Ingeniero'},
        {id:1,year:'2019',texto:'Decisión de cambiar de carrera'},
        {id:1,year:'2020',texto:'Primer trabajo como Desarrollador'},
    ]

    return(
        <div className='w-full mt-[8svh] flex h-full'>
            <div className="w-2/3 flex justify-center">
                {/*<div className="card-myself w-[60%] h-[80%] p-[40px]">
                    <div className="card-body h-full p-[8px]">
                        <p>{texto}</p>
                    </div>
                </div>*/}
                <div className="about-texto h-full px-[30px]">
                    <p>{texto}</p>
                </div>
            </div>
            <div className="w-1/3">
                <ul>
                    {timeline.map(item=>{
                        return (
                            <li className="flex">
                                <div>
                                    <svg id="chart" width="10" height="50">
                                        <line className="timeline-linea" x1="5" y1="0" x2="5" y2="50"></line>
                                        <circle className="timeline-circle" cx="5" cy="25" r="5" />
                                    </svg>
                                </div>
                                <div className="flex items-center ml-[15px]">
                                    <p>{`${item.year}: - ${item.texto}`}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>            
        </div> 
    )
}