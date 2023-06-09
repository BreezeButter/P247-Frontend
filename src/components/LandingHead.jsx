import Search from "./Search";
import Carosel from "./carosel";


export default function LandingHead() {
    return (
        <div >
            <div className="relative ">
                <Carosel />
                <h1 className="absolute top-60 right-8 left-8  z-10 text-5xl md:text-5xl  text-base-100 text-center">Are you ready to explore the pet food and products for your lovely pet</h1>
                <Search className="absolute  z-10 flex  top-96 left-12 right-12  hover:scale-125 duration-200" />
            </div>
        </div>
    )
}
