
import logo from "./../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import cross from "./../assets/cross.png"

export default function Hero() {
    const welcomeRef = useRef(null)
    const nameRef = useRef(null)
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
        <div className="w-[85%] h-screen min-h-fit relative">
            <nav className="flex justify-between items-center mt-10">
                <img src={logo} alt="logo" className="w-10" />
                <button className="bg-lgrey/20 border text-xs font-extralight border-lgrey rounded-full px-7 py-2">
                    View Github
                </button>
            </nav>


            <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                style={{ transform: `translate(-50%, ${welcomeTop}px)` }}
            />
            <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                style={{ transform: `translate(-50%, ${welcomeTop+nameHeight}px)` }}
            />
            <div className="w-[4px] aspect-square absolute bg-sky rounded-full left-[20%]"
                style={{ transform: `translate(-50%, ${welcomeTop+nameHeight+quoteHeight+1}px)` }}
            />
            <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                style={{ transform: `translate(50%, ${welcomeTop}px)` }}
            />
            <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                style={{ transform: `translate(50%, ${welcomeTop+nameHeight}px)` }}
            />
            <div className="w-[4px] aspect-square absolute bg-sky rounded-full right-[20%]"
                style={{ transform: `translate(50%, ${welcomeTop+nameHeight+quoteHeight+1}px)` }}
            />

            <img src={cross} alt="cross" className={`aspect-square absolute left-[20%] -translate-x-[${welcomeHeight / 2}px] top-0`}
                style={{
                    width: `${welcomeHeight - 30}px`,
                    transform: `translate(-${welcomeHeight * 3 / 4}px, ${welcomeTop + 15}px)`
                }}
            />
            <img src={cross} alt="cross" className={`aspect-square absolute right-[20%] translate-x-[${welcomeHeight / 2}px] top-0`}
                style={{
                    width: `${welcomeHeight - 30}px`,
                    transform: `translate(${welcomeHeight * 3 / 4}px, ${welcomeTop + 15}px)`
                }}
            />

            <div className="bg-navy w-[60%] h-[40%] blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute left-[20%]" />
            <div
                className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute left-[20%]"
                style={{ transform: `translate(-${welcomeHeight}px)` }}
            />
            <div className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute right-[20%]" />
            <div
                className="h-full w-[0.5px] bg-gradient-to-b from-transparent via-sky/30 to-transparent absolute right-[20%]"
                style={{ transform: `translate(${welcomeHeight}px)` }}
            />

            <div className="flex flex-col overflow-x-visible w-full items-center h-fit relative mt-32">
                <Hline />
                <div className="w-full flex justify-center items-center gap-5 py-7" ref={welcomeRef}>
                    <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 " />
                    <span className="text-sm font-extralight ">Welcome to</span>
                    <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 " />
                </div>
                <Hline />
                <div className="text-[5.5rem] text-transparent font-bold text-center w-fit py-5 gradient-text animate-gradient" ref={nameRef}>
                    Vansh's
                </div>
                <Hline />
                <div className="flex flex-col items-center gap-2 py-5" ref={quoteRef}>
                    <h4>Developer Portfolio</h4>
                    <span className="text-xs font-extralight ">Converting caffeine to code</span>
                </div>
                <Hline />

                <div className="flex justify-center items-center gap-9 text-dgrey text-[1.8rem] pt-24">
                    <button><FaGithub /></button>
                    <button><FaLinkedin /></button>
                    <button><SiGmail /></button>
                    <button><PiDribbbleLogoFill /></button>
                </div>

            </div>
        </div>
    )
}


const Hline = () => {
    return (
        <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent via-sky/30 to-transparent" />
    )
}

const Dot = () => {
    return (
        <div className="w-[3px] aspect-square absolute bg-sky rounded-full" />
    )
}
