

export default function Footer(){
    return(
        <div className="w-screen h-fit p-32 relative min-h-screen py-44">
            <div className="absolute bg-navy w-[70%] h-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 -z-10 blur-[100px]" />
            <div className="flex justify-center gap-24">
                <h3 className="text-5xl font-bold">
                Feel free to fill up your details, I will reach out to you asap
                </h3>
                <form className="w-[80%] h-[50vh] bg-red-500 rounded-md">

                </form>
            </div>
        
        </div>

    )
}