
import { useEffect, useRef, useState } from "react"
import "./projects.css"


// export default function ProjectsContainer(props) {
//     let windowWidth = 0
//     let horLenght = 0
//     let distFromTop = 0
//     let scrollDistance = 0
//     const wrapperRef = useRef(null)
//     const locomotiveRef = useRef(null)

//     const handleScroll = (e) => {
//         let scrollTop = window.pageYOffset;
//         if (scrollTop >= distFromTop + 70 && scrollTop <= scrollDistance + 70) {
//             locomotiveRef.current.style.transform = `translateX(-${scrollTop - distFromTop}px)`
//         }
//     }

//     useEffect(() => {
//         windowWidth = window.innerWidth
//         horLenght = locomotiveRef.current.scrollWidth
//         distFromTop = wrapperRef.current.offsetTop
//         scrollDistance = distFromTop + horLenght - windowWidth
//         wrapperRef.current.style.height = scrollDistance + "px"
//         window.addEventListener("scroll", handleScroll, { passive: true })
//         return (() => {
//             window.removeEventListener("scroll", handleScroll)
//         })
//     })


//     return (
//         <div className="bilateral-container" ref={wrapperRef}>
//             <div className="sticky-container" ref={locomotiveRef}>
//                 {
//                     [...Array(10).keys()].map((project, key) => {
//                         return (
//                             <ProjectTile />
//                         )
//                     })
//                 }

//             </div>
//         </div>
//     )
// }

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
        <div className="bg-black w-screen py-10 relative" ref={wrapperRef} >
            {/* bilateral scroller  */}
            <div className="p-20 overflow-x-visible flex sticky top-0" ref={locomotiveRef}>
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

