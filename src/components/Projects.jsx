
import { useEffect, useRef } from "react"
import "./projects.css"


export default function ProjectsContainer(props) {
  let windowWidth = 0
  let horLenght = 0
  let distFromTop = 0
  let scrollDistance = 0
  const wrapperRef = useRef(null)
  const locomotiveRef = useRef(null)

  const handleScroll = (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance + 70) {
      locomotiveRef.current.style.transform = `translateX(-${scrollTop - distFromTop}px)`
    }
  }

  useEffect(() => {
    windowWidth = window.innerWidth
    horLenght = locomotiveRef.current.scrollWidth
    distFromTop = wrapperRef.current.offsetTop
    scrollDistance = distFromTop + horLenght - windowWidth
    wrapperRef.current.style.height = scrollDistance + "px"
    window.addEventListener("scroll", handleScroll, { passive: true })
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })


  return (
    <div className="bilateral-container" ref={wrapperRef}>
      <div className="sticky-container" ref={locomotiveRef}>

        {
            [...Array(10).keys()].map((project, key) => {
                return(
                    <ProjectTile />
                )
            })
        }


      </div>
    </div>
  )
}


function ProjectTile(){
    return(
        <div className="project-container bg-dgrey/50 rounded-md border-[0.5px] border-lgrey">

        </div>
    )
}

