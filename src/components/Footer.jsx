import { useInView } from "framer-motion"
import { useRef } from "react"


export default function Footer(){
    const ref = useRef( null)
    const inView = useInView(ref, { once: true })

    return(
        <div className="w-screen h-fit p-32 relative min-h-screen py-40  max-[850px]:py-20 max-[850px]:px-10">
            <div className="absolute bg-[#060c2b] w-[60%] h-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 -z-10 blur-[100px] max-[850px]:h-[40%]" />
            <div className="flex justify-center gap-24 max-[850px]:flex-col max-[850px]:items-center max-[850px]:gap-10">
                <h3 className="text-5xl font-bold leading-[150%] tracking-wider w-4/5 max-[850px]:text-center max-[850px]:text-2xl"
                ref = {ref}
                style={{
                    transform: inView ? "none" : "translateY(50px)",
                    opacity: inView ? 1 : 0,
                    transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
                }}>
                Feel free to fill up your details, I will reach out to you asap
                </h3>
                <form className="w-[80%] h-[50vh] rounded-md flex flex-col items-center gap-7 pt-5 max-[850px]:w-[90%]" autoComplete="off">
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

                    <button type="submit" className="bg-lgrey/20 border text-xs font-extralight w-fit mt-16 border-lgrey rounded-full px-8 py-3 hover:shadow-[0_14px_32px_17px_rgba(6,12,43,255)] max-[850px]:mt-5">
                        Let's schedule a meet
                    </button>

                </form>
            </div>

            <div className="flex justify-center items-center gap-7 absolute bottom-12 left-1/2 -translate-x-1/2 max-[850px]:gap-5">
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 max-[850px]:w-[6rem] " />
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-regular">Bye</span>
                    <span className="text-xs font-extralight text-center  max-[850px]:min-w-max">Do Visit Again</span>
                </div>
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 max-[850px]:w-[6rem] " />
            </div>
        
        </div>

    )
}