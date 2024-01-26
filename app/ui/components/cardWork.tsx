
interface CardWork {
    width:string,
    texto:string,
    boton:string
}

export default function CardWork({width,texto,boton}:CardWork){
    return(
        <div className={`card-work mx-[10px] h-full flex-1 w-${width}`}>
            <div className="card-body flex p-[15px] flex-col justify-between h-full">
                <div className="w-full min-h-[10svh]">
                    <p className="card-texto mb-[10px]">{texto}</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className="card-boton px-[15px] py-[8px]">{boton}</button>
                </div>
            </div>
        </div>
    )
}