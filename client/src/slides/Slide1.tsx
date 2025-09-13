
import GoPro from "../assets/6dbdffc1e0d3e74061a59667317559ad 2.png"
import BlurBox from "../components/user/BlurBox";

import Circle from "../components/user/Circle";
const Slide1 = () => {
    return (
        <div>
        
            {/* Black Circles */}

            <Circle
                initial={{ top: "-5rem", left: "-4rem" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]" />

            <Circle
                className=" right-10 md:right-20 lg:right-60  -top-15  md:-top-23 lg:-top-35  w-[6rem] h-[6rem]  md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem]"/>
            {/* Green Blur */}
            <BlurBox className=" -top-20 left-1/2    md:left-1/6 "/>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row relative justify-center items-center z-20 p-3 md:p-24">
                <div className="w-full md:w-4/6 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-10 text-center md:text-left">
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-7xl leading-snug md:leading-[5rem]">
                        Capture Every Moment <br /> with GoPro Hero
                    </h1>

                    <p className="text-gray-200 font-semibold  sm:text-lg md:text-xl opacity-60">
                        Experience the ultimate action camera designed for adventurers, creators,
                        and storytellers. Record in stunning 5K, share instantly, and take your
                        creativity to the next level.
                    </p>
                </div>
                <div className="w-full md:w-2/6 flex justify-center md:justify-end">
                    <img src={GoPro} alt="gopro" className="max-w-full h-auto w-[250px]  sm:w-[300px] md:w-[400px]" />
                </div>
            </div>
        </div>
    )
}

export default Slide1