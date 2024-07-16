
import { useEffect, useRef, useState } from "react"
import "./projects.css"




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
        wrapperRef.current.style.height = `${verScrollDistance}px` 


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
                    [...Array(15).keys()].map((key) => {
                        return(
                            <ProjectTile  key={key}/>
                        )
                    })
                }
            </div>

        </div>
    )
}


function ProjectTile() {
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

        </div>
    )
}

