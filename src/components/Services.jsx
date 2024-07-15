
const servicesList = ["Software Development", null, "FullStack Web Development", null, "Data Architect", null, "Machine Learning", null, "Cybersecurity"]

import { FaLaptopCode } from "react-icons/fa6";
import { FaCodeBranch } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GiRobotGrab } from "react-icons/gi";
import { IoFingerPrint } from "react-icons/io5";

export default function Services() {
    return (
        <section className="flex flex-col w-screen gap-3 items-center mt-[3rem] mb-[5rem]">
            <div className="w-[60%] h-fit flex gap-5 text-lgrey">
                <div className="w-full aspect-square bg-dgrey/40 text-[2rem] rounded-xl border-[0.5px] border-sky flex items-center justify-center" >
                    <FaLaptopCode />
                </div>
                <Partition />
                <div className="w-full aspect-square bg-dgrey/40 rounded-xl text-[1.4rem] border-[0.5px] border-sky flex items-center justify-center" >
                    <FaCodeBranch />
                </div>
                <Partition />
                <div className="w-full aspect-square bg-dgrey/40 rounded-xl text-[1.4rem] border-[0.5px] border-sky flex items-center justify-center" >
                    <FaDatabase />
                </div>
                <Partition />
                <div className="w-full aspect-square text-[1.9rem] bg-dgrey/40 rounded-xl border-[0.5px] border-sky flex items-center justify-center" >
                    <GiRobotGrab />
                </div>
                <Partition />
                <div className="w-full aspect-square text-[1.9rem] bg-dgrey/40 rounded-xl border-[0.5px] border-sky flex items-center justify-center" >
                    <IoFingerPrint />
                </div>
            </div>

            <div className="flex gap-5 w-[60%]">
                {
                    servicesList.map((item, key) => {
                        return (
                            <div className="w-full text-[0.7rem] font-thin text-center">
                                {item ? item : ""}
                            </div>
                        )
                    })
                }
            </div>

            <p className="w-[50%] text-center my-32 font-thin leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
            </p>

        </section>
    )
}

function Partition() {
    return (
        <div className="w-full flex justify-center items-center relative">
            <div className="bg-sky/60 h-[0.5px] w-[80%]" />
            <div className="bg-sky aspect-square w-[5px] left-1/2 rounded-full -translate-x-1/2 absolute" />
            <div className="border-[0.5px] border-sky/60 aspect-square w-[15px] left-1/2 rounded-full -translate-x-1/2 absolute" />
        </div>
    )
}
