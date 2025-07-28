
import "./App.css"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProjectsContainer from "./components/Projects"
import Services from "./components/Services"
import TechStack from "./components/TechStack"


export default function App(){
  return(
    <div className="w-screen ">
      <Hero />
      <Services />
      <TechStack />
      <ProjectsContainer />
      <Footer />
    </div>
  )
}