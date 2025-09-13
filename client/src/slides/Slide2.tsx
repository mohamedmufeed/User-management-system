import Circle from "../components/user/Circle";
import BlurBox from "../components/user/BlurBox";
import GoPro from "../assets/6dbdffc1e0d3e74061a59667317559ad 2.png"
import SlideText from "../components/user/SlideText";
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
                initial={{ top: "-5rem", left: "-4rem" }}
                animateTo={{ top: "14rem", left: "-12rem" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]" />

            <Circle
                initial={{ top: "-10rem", right: "2rem" }}
                animateTo={{ top: "3rem", right: "-5rem" }}
                className=" w-[6rem] h-[6rem]  md:w-[10rem] md:h-[10rem]   lg:w-[14rem] lg:h-[14rem] "
            />
            {/* Green Blur */}
            <BlurBox animateTo={{ top: "12rem" }} className=" -top-20 left-1/2  md:left-1/6 " />

            {/* Content */}
            <div className="flex flex-col md:flex-col relative justify-center items-center z-20 p-6 md:p-13.5 gap-2 sm:gap-0">

                <div ref={(el) => {
                    if (el) textRefs.current.push(el);
                }} className="">
                    <SlideText
                        title="Final Title"
                        subtitle="Third block with bottom alignment."
                        className=" text-center max-w-md"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5  relative">

                    {/* Left Text */}
                    <div ref={(el) => {
                        if (el) textRefs.current.push(el);
                    }}>

                        <SlideText
                            className=" relative text-center max-w-sm md:-top-28"
                            title="Hello World"
                            subtitle="This is a reusable subtitle text block."
                        />
                    </div>



                    <div className="flex flex-col justify-center items-center">
                        <img ref={imageRef} src={GoPro} alt="GoPro" className="w-[250px]  sm:w-[300px] md:w-[400px]" />
                        <div className="flex justify-center ">
                            <button ref={buttonRef} className=" bg-[#0F2017] px-7 py-2 text-xs sm:text-base  rounded-full tracking-[0.15em] text-white shadow-[0_0_5px_1px_#3A9678] border border-[#3A9678]/70 ">
                                Discover More Features
                            </button>
                        </div>
                    </div>

                    {/* Right Text */}
                    <div ref={(el) => {
                        if (el) textRefs.current.push(el);
                    }}>

                        <SlideText
                            className="relative text-center max-w-sm md:top-15"
                            title="Another Title"
                            subtitle="Second block of text aligned differently."
                        />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Slide2