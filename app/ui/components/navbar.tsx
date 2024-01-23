
export default function NavBar(){
    return (
        <div className="absolute w-full flex mx-auto justify-between items-center p-2" style={{border:"1px solid black"}}>
            {/*Logo*/}
            <div className="p-3 ml-2">
                <h1 className="text-2xl">Felipe Laboren</h1>
            </div>
            {<button className="p-3 flex justify-center items-center mr-3 border-[3px] border-[--secondary-color] rounded">
                <div className=" flex flex-col justify-between items-center w-[45px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                    <div className="bg-[--secondary-color] h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                    <div className="bg-[--secondary-color] h-[3px] w-9 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                    <div className="bg-[--secondary-color] h-[3px] w-9 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                </div>
            </button>}
            {/*<button class="relative group">
                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                    <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                </div>
                </div>
            </button>*/}
        </div>        
    )
}