import {biografia} from '@/app/data/texto/myself'

export default function Myself(){

    interface Timeline {
        id:number,
        year:string,
        texto:string
    }

    const timeline: Timeline[] = [
        {id:1,year:'1993',texto:'Nacimiento'},
        {id:1,year:'2010',texto:'Ingreso a la Universidad'},
        {id:1,year:'2016',texto:'Graduación de Ingeniero Electricista'},
        {id:1,year:'2016',texto:'Primera migración'},
        {id:1,year:'2017',texto:'Primer trabajo como Ingeniero'},
        {id:1,year:'2019',texto:'Decisión de cambiar de carrera'},
        {id:1,year:'2020',texto:'Primer trabajo como Desarrollador'},
        {id:1,year:'2024',texto:'???'},
    ]

    return(
        <div className='w-[100svw] sm:mt-[8svh] mt-[3svh] flex sm:flex-row flex-col h-[100svh] overflow-scroll'>
            <div className="sm:w-2/3 w-full flex justify-center sm:mb-0 mb-[15px]">
                {/*<div className="card-myself w-[60%] h-[80%] p-[40px]">
                    <div className="card-body h-full p-[8px]">
                        <p>{texto}</p>
                    </div>
                </div>*/}
                <div className="sm:text-[1.7svw] text-[4.5svw] h-full px-[30px] text-justify">
                    <p className='whitespace-pre-wrap'>{biografia}</p>
                </div>
            </div>
            <div className="sm:w-1/3 w-full sm:px-0 px-[30px]">
                <h1 className="sm:text-[2svw] text-[6svw] mb-[10px] word-resalta-peq">Timeline de Felipe</h1>
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
                                <div className="flex items-center ml-[15px] sm:text-[1.7svw] text-[4.5svw]">
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