
import "./App.css"
import Hero from "./components/Hero"
import Services from "./components/Services"
import TechStack from "./components/TechStack"

export default function App(){
  return(
    <div className="w-screen ">
      <Hero />
      <Services />

      <TechStack />
    </div>
  )
}