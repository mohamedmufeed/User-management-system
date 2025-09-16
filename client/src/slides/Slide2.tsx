import Circle from "../components/user/ui/Circle";
import BlurBox from "../components/user/ui/BlurBox";
import GoPro from "../assets/6dbdffc1e0d3e74061a59667317559ad 2.png"
import SlideText from "../components/user/ui/SlideText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Slide2 = () => {
    const imageRef = useRef(null);
    const textRefs = useRef<HTMLDivElement[]>([]);
    const buttonRef = useRef(null);
    textRefs.current = [];

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
        tl.fromTo(imageRef.current, {
            x: 390,
            opacity: 1,
        }, {
            x: 0
        });

        tl.fromTo(
            textRefs.current,
            {
                opacity: 0,
                stagger: 0.2,

            },
            {
                opacity: 1,
            },
            "-=1"
        );


        tl.fromTo(buttonRef.current, {
            opacity: 0,
            duration: 0.6,
        }, { opacity: 1 },
            "-=1");
    }, []);


    return (
        <div>
            {/* Black Circles */}
            <Circle
                initial={{ top: "-8%", left: "-7%" }}
                animateTo={{ top: "30%", left: "-14%" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]" />

            <Circle
                initial={{ top: "-10%", right: "15%" }}
                animateTo={{ top: "1%", right: "-5%" }}
                className=" w-[6rem] h-[6rem]  md:w-[10rem] md:h-[10rem]   lg:w-[14rem] lg:h-[14rem] "
            />
            {/* Green Blur */}
            <BlurBox animateTo={{ top: "18%" }} className=" -top-20 left-1/2  md:left-1/6 " />

            {/* Content */}
            <div className="flex flex-col items-center justify-center z-20 gap-4 w-full max-w-[1200px] mx-auto px-4 sm:px-6">

                <div ref={(el) => {
                    if (el) textRefs.current.push(el);
                }} className="">
                    <SlideText
                        title="Waterproof up to 33ft (10m)"
                        subtitle="Shoot underwater without a housing"
                        className=" text-center max-w-md"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                    {/* Left Text */}
                    <div className="flex-1 flex justify-center" ref={(el) => {
                        if (el) textRefs.current.push(el);
                    }}>

                        <SlideText
                                           className="relative text-center max-w-sm md:-top-20 z-20"
                            title="Shock-resistant design"
                            subtitle="Withstands drops, bumps, and rough handling"
                        />
                    </div>



                    <div className="flex-1 flex flex-col items-center justify-center gap-4 min-w-[200px]">

                        <img
                            ref={imageRef}
                            src={GoPro}
                            alt="GoPro"
                            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] z-20" />

                        <div className="flex justify-center ">
                            <button ref={buttonRef} className=" bg-[#0F2017] px-7 py-2 text-xs sm:text-base  rounded-full tracking-[0.15em] text-white shadow-[0_0_5px_1px_#3A9678] border border-[#3A9678]/70 ">
                                Discover More Features
                            </button>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="flex-1 flex justify-center max-w-[250px] md:max-w-[290px]" ref={(el) => {
                        if (el) textRefs.current.push(el);
                    }}>

                        <SlideText
                            className="relative text-center max-w-sm md:top-15"
                            title="Durable construction"
                            subtitle="Built with impact-resistant materials for outdoor adventures."
                        />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Slide2