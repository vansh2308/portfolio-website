

export default function Footer(){
    return(
        <div className="w-screen h-fit p-32 relative min-h-screen py-40">
            <div className="absolute bg-navy w-[60%] h-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 -z-10 blur-[100px]" />
            <div className="flex justify-center gap-24">
                <h3 className="text-5xl font-bold leading-[150%] tracking-wider w-4/5">
                Feel free to fill up your details, I will reach out to you asap
                </h3>
                <form className="w-[80%] h-[50vh] bg-red-500 rounded-md">

                </form>
            </div>
        
        </div>

    )
}