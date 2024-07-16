
import cs from "./../assets/cs.png"
import { FaAws } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { RiGatsbyLine } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSelenium } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";



const techstack = [
    { logo: <FaAws />, name: "Amazon Web Services" },
    { logo: <SiGnubash />, name: "Bash Scripting" },
    { logo: <SiBlender />, name: "Blender" },
    { logo: <FaAws />, name: "C" },
    { logo: <TbBrandCpp />, name: "C++" },
    { logo: <RiGatsbyLine />, name: "GAtsby" },
    { logo: <SiDjango />, name: "Django" },
    { logo: <FaHtml5 />, name: "HTML5" },
    { logo: <FaDocker />, name: "Docker" },
    { logo: <SiExpress />, name: "Express Js" },
    { logo: <FaFigma />, name: "Figma" },
    { logo: <IoLogoFirebase />, name: "Firebase" },
    { logo: <SiFlask />, name: "Flask" },
    { logo: <FaGitAlt />, name: "Git" },
    { logo: <FaGithub/>, name: "Github" },
    { logo: <FaGolang />, name: "Golang" },
    { logo: <GrGraphQl />, name: "Apollo GraphQL" },
    { logo: <FaCss3Alt />, name: "CSS3" },
    { logo: <IoLogoJavascript />, name: "Javascript" },
    { logo: <SiSelenium />, name: "Selenium" },
    { logo: <SiKalilinux />, name: "Kali Linux" },
    { logo: <SiApachekafka />, name: "Apache Kafka" },
    { logo: <FaLinux />, name: "Linux" },
    { logo: <SiMui />, name: "Material UI" },
    { logo: <SiKubernetes />, name: "Kubernetes" },
    { logo: <SiMongodb />, name: "MongoDB" },
    { logo: <SiMysql />, name: "MySQL" },
    { logo: <SiNextdotjs />, name: "NextJS" },
    { logo: <IoLogoNodejs />, name: "Node JS" },
    { logo: <BiLogoPostgresql />, name: "PostgreSQL" },
    { logo: <FaPython />, name: "Python" },
    { logo: <FaReact />, name: "React Js" },
    { logo: <SiPytorch />, name: "Pytorch" },
    { logo: <SiRedux />, name: "Redux" },
    { logo: <SiRedis/>, name: "Redis" },
    { logo: <SiTailwindcss />, name: "Tailwind CSS" },
    { logo: <SiTensorflow />, name: "Tensorflow" },
    { logo: <TbBrandThreejs />, name: "Three JS" },
    { logo: <SiTypescript />, name: "Typescript" },
    { logo: <SiGooglecloud />, name: "Google Cloud Platform" },   
]

export default function TechStack() {
    return (
        <section className="w-screen flex items-center flex-col">
            <div className="w-full flex justify-center items-center gap-5 mb-20">
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 " />
                <span className="text-sm font-extralight ">Tech Stack</span>
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 " />
            </div>

            <div className="tech-stack-grid w-[60%] gap-5">
                {
                    techstack.map((item, key) => {
                        return(
                            <div className="w-full aspect-square bg-gradient-to-bl from-[#272d3c] to-dgrey rounded-md border-[0.5px] border-lgrey flex items-center justify-center text-[1.9rem]" key={key}>
                                {item.logo}
                            </div>
                        )
                    })
                }
            </div>

            <img src={cs} alt="cs" className="w-[100vw] -mt-[11rem] -z-10 mix-blend-lighten" />



        </section>
    )
}