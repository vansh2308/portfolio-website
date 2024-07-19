
import { useEffect, useRef, useState } from "react"
import "./projects.css"


import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import redisImg from "./../assets/projects/redis.jpg"
import llmImg from "./../assets/projects/llm.jpg"
import neatImg from "./../assets/projects/neat.jpg"
import cryptoDashImg from "./../assets/projects/crypto-dash.png"
import ignusImg from "./../assets/projects/ignus.png"
import jdAcadImg from "./../assets/projects/jd-acad.png"
import mkdnEditorImg from "./../assets/projects/mkdn-editor.png"
import vidStreamingPng from "./../assets/projects/vid-streaming.png"
import weatherDashPng from "./../assets/projects/weather-dash.png"

const projectList = [
    {
        thumbnailSrc: redisImg,
        name: "MAPD - Redis Clone",
        description: "lorem ipsum"
    }, 
    {
        thumbnailSrc: llmImg,
        name: "LLM from scratch",
        description: "lorem ipsum"
    },
    {
        thumbnailSrc: neatImg,
        name: "FlappyBird AI Agent",
        description: "lorem ipsum"
    },
    {
        thumbnailSrc: cryptoDashImg,
        name: "Crypto Dashboard",
        description: ""
    },
    {
        thumbnailSrc: ignusImg,
        name: "Ignus 2022",
        description: ""
    },
    {
        thumbnailSrc: jdAcadImg,
        name: "Jodhpur Acad Landing",
        description: ""
    }, 
    {
        thumbnailSrc: mkdnEditorImg,
        name: "In-browser markdown editor",
        description: ""
    },
    {
        thumbnailSrc: vidStreamingPng,
        name: "Video Streaming Platform",
        description: "",
    },
    {
        thumbnailSrc: weatherDashPng,
        name: "Weather Dashboard",
        description: ""
    }
]



export default function ProjectsContainer(){
    const ratio = 0.5    // y to x scroll ratio
    const wrapperRef = useRef(null)
    const locomotiveRef = useRef(null)
    let distanceFromTop = null

    const handleScroll = (e) => {
        if(window.scrollY >= distanceFromTop){
            locomotiveRef.current.style.transform = `translateX(-${window.scrollY - distanceFromTop}px)`
        }
    }

    useEffect(() => {
        let verScrollDistance = locomotiveRef.current.clientWidth / ratio
        distanceFromTop = wrapperRef.current.getBoundingClientRect().top
        wrapperRef.current.style.height = `${verScrollDistance*2}px` 


        window.addEventListener("scroll", handleScroll, { passive: true })
        return(() => {
            window.removeEventListener("scroll", handleScroll)
        })
        
    }, [])



    return(
        // wrapper
        <div className="bg-black w-screen py-10 relative max-[850px]:py-3 max-[850px]:hidden" ref={wrapperRef} >
            {/* bilateral scroller  */}
            <div className="p-20 overflow-x-visible flex sticky top-0 max-[850px]:p-5" ref={locomotiveRef}>
                {
                    [...Array(27).keys()].map((key) => {
                        return(
                            <ProjectTile  key={key} project={ projectList[key%projectList.length] }/>
                        )
                    })
                }
            </div>

        </div>
    )
}


function ProjectTile( {project} ) {
    return (
        <div className="project-container bg-dgrey/50 rounded-md border-[0.5px] border-lgrey">
            <div className="w-full h-fit border-b-[0.5px] border-lgrey flex p-2 gap-1">
                {
                    [...Array(3).keys()].map((key) => {
                        return (
                            <div className="rounded-full aspect-square w-2 border-[0.5px] border-sky" key={key} />
                        )
                    })
                }
            </div>


            <div className="w-full aspect-square bg-navy overflow-hidden flex justify-center items-center">
                <img src = {project.thumbnailSrc} alt="test" className=" mix-blend-luminosity size-full object-cover" />
            </div>

            <div className="p-4 flex flex-col gap-2 max-h-full">
                <h4 className="font-medium text-xl"> {project.name} </h4>
                <div className="flex justify-between items-center mb-4">
                    <h5 className="font-extralight text-xs">Python C++</h5>
                    <div className="flex gap-2 text-lg items-center">
                        <FaLink />
                        <FaGithub />
                    </div>
                </div>

                <p className="text-[0.7rem] font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, dignissimos nemo optio saepe eum amet. Fugit modi magni similique tenetur neque eius ipsam odio esse sint voluptates. Fugiat, autem vitae?
                </p>

            </div>


        </div>
    )
}

