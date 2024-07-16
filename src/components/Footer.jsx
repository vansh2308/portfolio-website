

export default function Footer(){
    return(
        <div className="w-screen h-fit p-32 relative min-h-screen py-40">
            <div className="absolute bg-[#060c2b] w-[60%] h-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 -z-10 blur-[100px]" />
            <div className="flex justify-center gap-24">
                <h3 className="text-5xl font-bold leading-[150%] tracking-wider w-4/5">
                Feel free to fill up your details, I will reach out to you asap
                </h3>
                <form className="w-[80%] h-[50vh] rounded-md flex flex-col items-center gap-7 pt-5" autoComplete="off">
                    <div className="w-full">
                        <input type="text" placeholder="Name" name="name" className="text-sm bg-transparent p-3 focus:outline-none w-full text-center" />
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky to-transparent" />
                    </div>
                    <div className="w-full">
                        <input type="email" placeholder="Email Address" name="email" className="text-sm bg-transparent p-3 focus:outline-none w-full text-center" />
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky to-transparent" />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Name" name="name" className="text-sm bg-transparent p-3 focus:outline-none w-full text-center" />
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky to-transparent" />
                    </div>

                    <button type="submit" className="bg-lgrey/20 border text-xs font-extralight w-fit mt-16 border-lgrey rounded-full px-8 py-3 hover:shadow-[0_14px_32px_17px_rgba(6,12,43,255)]">
                        Let's schedule a meet
                    </button>

                </form>
            </div>

            <div className="flex justify-center items-center gap-7 absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 " />
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-regular ">Bye</span>
                    <span className="text-xs font-extralight ">Do Visit Again</span>
                </div>
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 " />
            </div>
        
        </div>

    )
}