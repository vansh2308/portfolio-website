
import cs from "./../assets/cs.png"

export default function TechStack() {
    return (
        <section className="w-screen flex items-center flex-col">
            <div className="w-full flex justify-center items-center gap-5 mb-20">
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-r from-transparent to-sky/50 " />
                <span className="text-sm font-extralight ">Tech Stack</span>
                <div className="w-[10rem] h-[1.5px] bg-gradient-to-l from-transparent to-sky/50 " />
            </div>

            <div className="tech-stack-grid w-[70%] gap-5">
                {
                    [...Array(40).keys()].map((item, key) => {
                        return(
                            <div className="w-full aspect-square bg-dgrey/40 rounded-md border-[0.5px] border-sky" />
                        )
                    })
                }
            </div>

            <img src={cs} alt="cs" className="w-[80vw] -mt-[7.5rem] -z-10" />



        </section>
    )
}