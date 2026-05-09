import { Hero } from "./components/Hero";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

// import { Timeline } from "./components/ui/timeline";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaLinux,
  FaReact,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiApachekafka,
  SiKubernetes,
  SiMongodb,
  SiPytorch,
  SiRedux,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { Timeline } from "./components/ui/timeline";
import { cn } from "./lib/utils";
import { HeroParallax } from "./components/ui/hero-parallax";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import { toast } from "sonner";

function TimelineContentHighlight({
  text,
  className,
}: {
  text: string;
  className?: string | null;
}) {
  return (
    <span className={cn("font-[1000] text-green-400", className)}>{text}</span>
  );
}

const data = [
  {
    title: "2019",
    content: (
      <div>
        <h4 className="mb-8 md:text-3xl font-semibold text-neutral-800 text-2xl dark:text-neutral-200">
          Chaos, Curiosity & Survival
        </h4>
        <p className="md:text-lg text-sm text-muted-foreground font-thin">
          <TimelineContentHighlight text="JEE prep" /> happened in the middle of
          lockdowns, uncertainty, and endless online classes I barely attended.{" "}
          <br />
          Got into the coding world as an{" "}
          <TimelineContentHighlight text="Infosys Trainee" /> <br />
          Somewhere between all that, a{" "}
          <TimelineContentHighlight text="NASA Space Settlement Contest Honourable Mention" />{" "}
          quietly became proof that I could build beyond textbooks.
        </p>
      </div>
    ),
  },
  {
    title: "2021-23",
    content: (
      <div>
        <h4 className="mb-8 md:text-3xl font-semibold text-neutral-800 text-2xl dark:text-neutral-200">
          IIT: Engineering Through Chaos
        </h4>
        <p className="md:text-lg text-sm text-muted-foreground font-thin">
          Got into <TimelineContentHighlight text="IIT Jodhpur" /> with big
          expectations and very little idea of what college life would actually
          look like. <br />
          Slowly moved from being “just another fresher” to leading communities
          as <TimelineContentHighlight
            text={"Google Dev Students Club Lead"}
          />{" "}
          and shipping things like the{" "}
          <TimelineContentHighlight text={"Ignus Website"} /> <br />
          <TimelineContentHighlight
            text={"IITJ taught us surviving 3 days without water."}
          />
        </p>
      </div>
    ),
  },
  {
    title: "2023-25",
    content: (
      <div>
        <h4 className="mb-8 md:text-3xl font-semibold text-neutral-800 text-2xl dark:text-neutral-200">
          Building, Breaking Limits & Goodbyes
        </h4>
        <p className="md:text-lg text-sm text-muted-foreground font-thin">
          Cracked <TimelineContentHighlight text={"GSOC"} />, interned at{" "}
          <TimelineContentHighlight text={"GoQuant"} />, spent nights building
          things that felt bigger than coursework. <br />
          In between all the grind were{" "}
          <TimelineContentHighlight text={"trips & late-night memories"} /> that
          made IIT feel like home. <br />
          Then comes a day, when we probably had the{" "}
          <TimelineContentHighlight
            text={"last conversation with some people"}
          />
        </p>
      </div>
    ),
  },
  {
    title: "2025-2026",
    content: (
      <div>
        <h4 className="mb-8 md:text-3xl font-semibold text-neutral-800 text-2xl dark:text-neutral-200">
          The Real World
        </h4>
        <p className="md:text-lg text-sm text-muted-foreground font-thin">
          Worked as{" "}
          <TimelineContentHighlight text="AI-ML Engineer at Writesonic" /> for
          ~6 months <br />
          Joined <TimelineContentHighlight text="IBM as Associate Engineer" />{" "}
          but soon started feeling{" "}
          <TimelineContentHighlight text={"mechanical"} /> <br />
          <br />
          <TimelineContentHighlight
            text={"THE NEXT CHAPTER :"}
            className={"underline underline-offset-6"}
          />{" "}
          Looking forward to working at fast-paced startups / business...
          <TimelineContentHighlight text="Let's build real stuff, not just LLM wrappers or prompt engineering." />
        </p>
      </div>
    ),
  },
];

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
];

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
];

const techstack = [
  { logo: <TbBrandCpp />, name: "C++" },
  { logo: <FaLinux />, name: "Linux" },
  { logo: <FaPython />, name: "Python" },
  { logo: <FaJava />, name: "Java" },
  { logo: <IoLogoJavascript />, name: "Javascript" },
  { logo: <FaGolang />, name: "Golang" },
  { name: "OOPs" },
];

function App() {
  return (
    <>
      <Hero />
      <InfiniteMovingCards
        direction="right"
        items={techstack}
        speed="normal"
        className="mt-20 font-mono "
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

      <section className="dark md:mt-20 mt-0">
        <Timeline data={data} />
      </section>

      <HeroParallax
        products={[
          {
            title: "Flux",
            link: "https://github.com/vansh2308/website-builder-saas.git",
            thumbnail:
              "https://github.com/vansh2308/Flux/raw/master/public/flux-render.png",
          },
          {
            title: "COSMOS",
            link: "https://github.com/vansh2308/cosmos.git",
            thumbnail:
              "https://github.com/vansh2308/cosmos/raw/master/static/hero-cosmos.png",
          },
          {
            title: "OdourGNN",
            link: "https://github.com/vansh2308/Odour-GNN.git",
            thumbnail:
              "https://github.com/vansh2308/Odour-GNN/raw/master/figures/readme-hero.png",
          },
          {
            title: "SmartSchedule",
            link: "https://github.com/vansh2308/genetic-class-scheduler.git",
            thumbnail:
              "https://github.com/vansh2308/genetic-class-scheduler/blob/master/static/thumbnail.png?raw=true",
          },
          {
            title: "COSMOS",
            link: "https://github.com/vansh2308/cosmos.git",
            thumbnail:
              "https://github.com/vansh2308/cosmos/raw/master/static/hero-cosmos.png",
          },
          {
            title: "Flux",
            link: "https://github.com/vansh2308/website-builder-saas.git",
            thumbnail:
              "https://github.com/vansh2308/Flux/raw/master/public/flux-render.png",
          },
          {
            title: "SmartSchedule",
            link: "https://github.com/vansh2308/genetic-class-scheduler.git",
            thumbnail:
              "https://github.com/vansh2308/genetic-class-scheduler/blob/master/static/thumbnail.png?raw=true",
          },
          {
            title: "OdourGNN",
            link: "https://github.com/vansh2308/Odour-GNN.git",
            thumbnail:
              "https://github.com/vansh2308/Odour-GNN/raw/master/figures/readme-hero.png",
            thumbnailClassname: "mix-blend-multiply",
          },
        ]}
      />

      <section className="w-[80vw] mx-auto h-screen dark relative flex flex-col items-center text-center pt-40 md:pb-0">
        <h2 className="md:text-5xl text-3xl font-light mb-2 text-black font-bitcount dark:text-white max-w-4xl">
          Looking forward to
          <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
            {" "}
            high-impact{" "}
          </span>
          projects. Let's build some real stuff,
          <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
            {" "}
            Connect{" "}
          </span>
          with me on
        </h2>

        <div className="flex justify-between gap-10 mt-10 text-4xl z-20">
          <a
            onClick={() => {
              navigator.clipboard.writeText('vanshagarwal11@gmail.com')
              toast("Email copied!")
            }}
            className="cursor-pointer"
          >
            <SiGmail className="hover:text-green-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/vanshag2308/"
            className="cursor-pointer"
          >
            <FaLinkedin className="hover:text-green-400" />
          </a>
          <a href="https://github.com/vansh2308" className="cursor-pointer">
            <FaGithub className="hover:text-green-400" />
          </a>
        </div>

        <TextHoverEffect text="VANSH" />
      </section>
    </>
  );
}

export default App;
