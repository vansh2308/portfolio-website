
import { Hero } from "./components/Hero"
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards"
// import { Timeline } from "./components/ui/timeline";

import { FaAws, FaDocker, FaGitAlt, FaGithub, FaPython, FaLinux, FaReact, FaJava } from "react-icons/fa";
import { SiExpress, SiApachekafka, SiKubernetes, SiMongodb, SiPytorch, SiRedux, SiPandas, SiScikitlearn, SiNumpy,  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";

// const data = [
//   {
//     title: "2024",
//     content: (
//       <div>
//         <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//           Built and launched Aceternity UI and Aceternity UI Pro from scratch
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <img
//             src="https://assets.aceternity.com/templates/startup-1.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/templates/startup-2.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/templates/startup-3.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/templates/startup-4.webp"
//             alt="startup template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Early 2023",
//     content: (
//       <div>
//         <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//           I usually run out of copy, but when I see content this big, I try to
//           integrate lorem ipsum.
//         </p>
//         <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//           Lorem ipsum is for people who are too lazy to write copy. But we are
//           not. Here are some more example of beautiful designs I built.
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <img
//             src="https://assets.aceternity.com/pro/hero-sections.png"
//             alt="hero template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/features-section.png"
//             alt="feature template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/pro/bento-grids.png"
//             alt="bento template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/cards.png"
//             alt="cards template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Changelog",
//     content: (
//       <div>
//         <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//           Deployed 5 new components on Aceternity today
//         </p>
//         <div className="mb-8">
//           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//             ✅ Card grid component
//           </div>
//           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//             ✅ Startup template Aceternity
//           </div>
//           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//             ✅ Random file upload lol
//           </div>
//           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//             ✅ Himesh Reshammiya Music CD
//           </div>
//           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
//             ✅ Salman Bhai Fan Club registrations open
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <img
//             src="https://assets.aceternity.com/pro/hero-sections.png"
//             alt="hero template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/features-section.png"
//             alt="feature template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/pro/bento-grids.png"
//             alt="bento template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//           <img
//             src="https://assets.aceternity.com/cards.png"
//             alt="cards template"
//             width={500}
//             height={500}
//             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
//           />
//         </div>
//       </div>
//     ),
//   },
// ];


const techstack2 = [
  { logo: <FaReact />, name: "React Js" },
  { logo: <SiMongodb />, name: "MongoDB" },
  { logo: <SiExpress />, name: "Express Js" },
  { logo: <IoLogoNodejs />, name: "Node JS" },
  { logo: <GrGraphQl />, name: "Apollo GraphQL" },
  { logo: <SiRedux />, name: "Redux" },
  { logo: <FaDocker />, name: "Docker" },
  { logo: <FaGitAlt />, name: "Git" },
  { logo: <FaGithub />, name: "Github" },
  { logo: <SiKubernetes />, name: "Kubernetes" },
  { logo: <BiLogoPostgresql />, name: "PostgreSQL" },
  { logo: <FaAws />, name: "Amazon Web Services" },
  { logo: <SiApachekafka />, name: "Apache Kafka" },
]

const techstack3 = [
  { logo: <SiPytorch />, name: "Pytorch" },
  { logo: <SiScikitlearn />, name: "SciKitLearn" },
  { logo: <SiNumpy />, name: "Numpy" },
  { logo: <SiPandas />, name: "Pandas" },
  { name: "Machine Learning" },
  { name: "Deep Learning" },
  { name: "Reinforcement Learning" },
  { name: "Computer Vision" },
  { name: "Probability/Stats" },
  { name: "Calculus" },
  { name: "Linear Algebra" },
  { name: "Quant Finance" },
  { name: "Stochastic Calculus" },
  { name: "Optimization" },
]

const techstack = [
  { logo: <TbBrandCpp />, name: "C++" },
  { logo: <FaLinux />, name: "Linux" },
  { logo: <FaPython />, name: "Python" },
  { logo: <FaJava />, name: "Java" },
  { logo: <IoLogoJavascript />, name: "Javascript" },
  { logo: <FaGolang />, name: "Golang" },
  { name: "OOPs" },
]

function App() {
  return (
    <>
      <Hero />
      <InfiniteMovingCards
        direction="right"
        items={techstack}
        speed="normal"
        className="mt-20 font-mono"
      />
      <InfiniteMovingCards
        direction="left"
        items={techstack2}
        speed="slow"
        className="font-mono"
      />
      <InfiniteMovingCards
        direction="right"
        items={techstack3}
        speed="slow"
        className="font-mono"
      />

      {/* <section className="dark mt-20">
        <Timeline data={data} />
      </section> */}

      <section className="w-screen h-screen dark">

      </section>

    </>
  )
}

export default App