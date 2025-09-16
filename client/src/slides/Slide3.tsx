import BlurBox from "../components/user/ui/BlurBox";
import Circle from "../components/user/ui/Circle";
import GoPro from "../assets/6dbdffc1e0d3e74061a59667317559ad 2.png";
import SlideText from "../components/user/ui/SlideText";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Slide3 = () => {
    const leftImageRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        gsap.fromTo(leftImageRef.current,
            { x: 388, opacity: 1 },
            { x: 0 })
    }, [])
    return (
        <div className="">
            {/* Black Circles */}
            <Circle
                initial={{ top: "30%", left: "-14%" }}
                animateTo={{ top: "73%", left: "-7%" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem] bg-black"
            />

            <Circle
                initial={{ top: "1%", right: "-5%" }}
                animateTo={{ top: "-10%", right: "15%" }}
                className="w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem] bg-black"
            />

            {/* Green Blur */}
            <BlurBox
                initial={{ top: "18%", left: "12%" }}
                animateTo={{ top: "25%", left: "50%" }}
                className="w-full -top-20 left-1/2 md:left-1/6"
            />

            {/* Content */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 sm:px-6 z-20 relative w-full max-w-[1200px] mx-auto">

                {/* Left Image & Button */}
               <div ref={leftImageRef} className="flex flex-col justify-center items-center md:w-1/2 gap-5 sm:gap-6">

                    <img
                        src={GoPro}
                        alt="GoPro"
                        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px]" />

                    <button className="bg-[#0F2017] px-7 py-2 text-xs sm:text-base rounded-full tracking-[0.15em] text-white shadow-[0_0_5px_1px_#3A9678] border border-[#3A9678]/70">
                        Discover More Features
                    </button>
                </div>

                {/* Right  Texts */}
               <div className="flex-1 flex flex-col justify-start items-start gap-4 px-4 sm:px-0">

                    <SlideText
                        initial={{ x: -100, y: -100 }}
                        animateTo={{ x: 0, y: 0 }}
                        title="Waterproof & Rugged"
                        subtitle="Take your GoPro anywhere — rain, snow, surf, or dust, HERO12 can handle it all."
                    />
                    <SlideText
                        initial={{ x: -500, y: -50 }}
                        animateTo={{ x: 0, y: 0 }}
                        title="Stabilized 4K Video"
                        subtitle="Shoot ultra-smooth 4K footage anywhere, with HyperSmooth stabilization technology."
                    />
                    <SlideText
                        initial={{ x: 90, y: -35 }}
                        animateTo={{ x: 0, y: 0 }}
                        title="Long-lasting Battery"
                        subtitle="Capture more adventure with an extended battery life and fast charging."
                    />
                </div>
            </div>
        </div>
    );
};

export default Slide3;
