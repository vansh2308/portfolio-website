
const servicesList = ["Software Development", null, "FullStack Web Development", null, "Data Architect", null, "Machine Learning", null, "Cybersecurity"]

import { FaLaptopCode } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GiRobotGrab } from "react-icons/gi";
import { IoFingerPrint } from "react-icons/io5";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Services() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })


    return (
        <section className="flex flex-col w-screen gap-3 items-center mt-[3rem] mb-[5rem] max-[850px]:mt-2">
            <div className="w-[60%] h-fit flex gap-5 text-lgrey max-[850px]:gap-4 max-[850px]:w-[80%]" ref={ref}>
                <div className="w-full aspect-square bg-gradient-to-br from-[#272d3c] to-dgrey text-[2rem] rounded-xl border-[0.5px] border-lgrey flex items-center justify-center"
                style={{
                    opacity: inView ? "100%" :  "0%",
                    transition: "opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
                }} 
                >
                    <FaLaptopCode />
                </div>
                <Partition delay={0.2} inView = {inView} />
                <div className="w-full aspect-square bg-gradient-to-br from-[#272d3c] to-dgrey rounded-xl text-[1.4rem] border-[0.5px] border-lgrey flex items-center justify-center" style={{
                    opacity: inView ? "100%" :  "0%",
                    transition: "opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                }}  >
                    <FaCodeBranch />
                </div>
                <Partition delay={0.6} inView = {inView} />
                <div className="w-full aspect-square bg-gradient-to-br from-[#272d3c] to-dgrey  rounded-xl text-[1.4rem] border-[0.5px] border-lgrey flex items-center justify-center" style={{
                    opacity: inView ? "100%" :  "0%",
                    transition: "opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                }}  >
                    <FaDatabase />
                </div>
                <Partition delay={1} inView = {inView} />
                <div className="w-full aspect-square bg-gradient-to-br from-[#272d3c] to-dgrey text-[1.9rem] rounded-xl border-[0.5px] border-lgrey flex items-center justify-center" style={{
                    opacity: inView ? "100%" :  "0%",
                    transition: "opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
                }}  >
                    <GiRobotGrab />
                </div>
                <Partition delay={1.4} inView = {inView} />
                <div className="w-full aspect-square bg-gradient-to-br from-[#272d3c] to-dgrey text-[1.9rem] rounded-xl border-[0.5px] border-lgrey flex items-center justify-center" style={{
                    opacity: inView ? "100%" :  "0%",
                    transition: "opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s",
                }}  >
                    <IoFingerPrint />
                </div>
            </div>

            <div className="flex gap-5 w-[60%] max-[850px]:w-[80%] max-[850px]:gap-2 ">
                {
                    servicesList.map((item, key) => {
                        return (
                            <div className="w-full text-[0.7rem] font-thin text-center max-[850px]:text-[0.5rem]" key={key}>
                                {item ? item : ""}
                            </div>
                        )
                    })
                }
            </div>

            <p className="w-[50%] text-center mt-32 mb-20 font-thin leading-9 text-sm max-[850px]:my-20 max-[850px]:w-[80%] max-[850px]:mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum. s nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
            </p>

        </section>
    )
}

function Partition( {delay, inView} ) {
    return (
        <div className="w-full flex justify-center items-center relative max-[850px]:hidden" style={{
            opacity: inView ? "100%" :  "0%",
            transition:`opacity 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        }} 
        >
            <div className="bg-sky/60 h-[0.5px] w-[80%]" />
            <div className="bg-sky aspect-square w-[5px] left-1/2 rounded-full -translate-x-1/2 absolute" />
            <div className="border-[0.5px] border-sky/60 aspect-square w-[15px] left-1/2 rounded-full -translate-x-1/2 absolute" />
        </div>
    )
}
