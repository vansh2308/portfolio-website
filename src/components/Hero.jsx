
import logo from "./../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import cross from "./../assets/cross.png"

export default function Hero() {
    const welcomeRef = useRef(null)
    const nameRef = useRef(null)
    const inView = useInView(nameRef, { once: true })
    const quoteRef = useRef(null)
    const [welcomeHeight, setWelcomeHeight] = useState(0)
    const [welcomeTop, setWelcomeTop] = useState(0)
    const [nameHeight, setNameHeight] = useState(0)
    const [quoteHeight, setQuoteHeight] = useState(0)

    useEffect(() => {
        setWelcomeHeight(welcomeRef.current.clientHeight)
        setWelcomeTop(welcomeRef.current.getBoundingClientRect().top)
        setNameHeight(nameRef.current.clientHeight)
        setQuoteHeight(quoteRef.current.clientHeight)
    }, [])

    return (
        <section className="w-screen justify-center flex max-[850px]:overflow-x-hidden max-[850px]:min-h-max">
            <div className="w-[85%] min-h-[95vh]  h-fit relative">

                {/* spotlights  */}
                <div className="spotlight w-40 h-[45rem] z-20 bg-gradient-to-b from-transparent to-lgrey/20 absolute blur-3xl -rotate-45 -top-[10%] origin-top -left-[10%] animate-splotlightLeft max-[850px]:blur-xl max-[850px]:h-[50vh] max-[850px]:top-0 max-[850px]:-left-[40vw] max-[850px]:w-20" />
                <div className="spotlight w-40 h-[40rem] z-30 bg-gradient-to-b from-transparent to-lgrey/20 absolute blur-3xl rotate-45 -top-[15%] origin-top right-[0%] animate-splotlightRight max-[850px]:blur-xl max-[850px]:h-[60vh] max-[850px]:w-20 max-[850px]:top-36 max-[850px]:-right-[50%]" />


                {/* navbar  */}
                <nav className="flex justify-between items-center mt-10 max-[850px]:justify-center">
                    <img src={logo} alt="logo" className="w-10" />

                    <a href="https://github.com/vansh2308">
                        <button className="bg-lgrey/20 border text-xs font-extralight border-lgrey rounded-full px-7 py-2 hover:shadow-[0_14px_32px_17px_rgba(6,12,43,255)] max-[850px]:hidden">
                            View Github
                        </button>
                    </a>

                </nav>



                {/* Dots  */}
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                    style={{
                        transform: `translate(-50%, ${welcomeTop}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                    style={{
                        transform: `translate(-50%, ${welcomeTop + nameHeight}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                    style={{
                        transform: `translate(-50%, ${welcomeTop + nameHeight + quoteHeight + 1}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                    style={{
                        transform: `translate(50%, ${welcomeTop}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                    style={{
                        transform: `translate(50%, ${welcomeTop + nameHeight}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />
                <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                    style={{
                        transform: `translate(50%, ${welcomeTop + nameHeight + quoteHeight + 1}px)`, opacity: inView ? "100%" : "0%",
                        transition: "opacity 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
                    }}
                />




                {/* cross  */}
                <img src={cross} alt="cross" className={`aspect-square absolute left-[20%] -translate-x-[${welcomeHeight / 2}px] top-0`}
                    style={{
                        width: `${welcomeHeight - 30}px`,
                        transform: `translate(-${welcomeHeight * 3 / 4}px, ${welcomeTop + 15}px)`,
                        opacity: inView ? "100%" : "0%",
                        transition: "opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",

                    }}
                />
                <img src={cross} alt="cross" className={`aspect-square absolute right-[20%] translate-x-[${welcomeHeight / 2}px] top-0`}
                    style={{
                        width: `${welcomeHeight - 30}px`,
                        transform: `translate(${welcomeHeight * 3 / 4}px, ${welcomeTop + 15}px)`,
                        opacity: inView ? "100%" : "0%",
                        transition: "opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                    }}
                />



                {/* background gradient blob  */}
                <div className="bg-navy w-[60%] h-[40%] blur-[100px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[850px]:blur-2xl max-[850px]:w-[60%] max-[850px]:h-[50%]" style={{
                    opacity: inView ? "100%" : "0",
                    transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }} />


                {/* vertical lines */}
                <div className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute left-[20%]" style={{
                    height: inView ? "100%" : "0",
                    transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                />
                <div
                    className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute left-[20%]"
                    style={{
                        height: inView ? "100%" : "0",
                        transition: "height 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        transform: `translate(-${welcomeHeight}px)`
                    }}
                />
                <div className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute right-[20%]" style={{
                    height: inView ? "100%" : "0",
                    transition: "height 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }} />
                <div
                    className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute right-[20%]"
                    style={{
                        height: inView ? "100%" : "0",
                        transition: "height 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        transform: `translate(${welcomeHeight}px)`
                    }}
                />



                {/* text wrapepr  */}
                <div className="flex flex-col overflow-x-visible w-full items-center h-fit relative mt-32">
                    <Hline inView={inView} />
                    <div className="w-full flex justify-center items-center gap-5 py-7 max-[850px]:p-4" ref={welcomeRef}>
                        <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 max-[850px]:w-[2rem]" />
                        <span className="text-sm font-extralight ">Welcome to</span>
                        <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 max-[850px]:w-[2rem] " />
                    </div>
                    <Hline inView={inView} />
                    <div
                        className="text-[5.5rem] max-[850px]:text-[4rem] text-transparent font-bold text-center w-fit py-5 gradient-text animate-gradient"
                        ref={nameRef}
                        style={{
                            transform: inView ? "none" : "translateY(50px)",
                            opacity: inView ? 1 : 0,
                            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        Vansh's
                    </div>
                    <Hline inView={inView} />
                    <div className="flex flex-col items-center gap-2 py-5 max-[850px]:py-3 max-[850px]:gap-1" ref={quoteRef}>
                        <h4>Developer Portfolio</h4>
                        <span className="text-xs font-extralight ">Converting caffeine to code</span>
                    </div>
                    <Hline inView={inView} />

                    <div className="flex justify-center items-center gap-9 text-dgrey text-[1.8rem] pt-24 max-[850px]:pt-40">
                        <a href="https://github.com/vansh2308"> <button><FaGithub /></button> </a>
                        <a href="https://www.linkedin.com/in/vansh-agarwal-9b2836166/"> <button><FaLinkedin /></button> </a>
                        <a href='mailto:agarwal.25@iitj.ac.in'> <button><SiGmail /></button> </a>
                        <a href="https://dribbble.com/vansh2308"> <button><PiDribbbleLogoFill /></button> </a>
                    </div>

                </div>



            </div>

        </section>
    )
}


const Hline = ({ inView }) => {
    return (
        <div
            className="h-[0.5px] bg-gradient-to-r from-transparent via-sky/30 to-transparent"
            style={{
                width: inView ? "100%" : "0",
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
        />
    )
}
