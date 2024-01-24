export default function myselfLayout({children}: {children: React.ReactNode}) {
    return(
        <div className='w-[100vw] h-[100vh] flex flex-col p-[2svw] items-center'>
            <div className="w-full mt-[8svh]">
                <h1 className="texto-titulos">Sobre mi</h1>
            </div>
            {children}
        </div> 
    )
}