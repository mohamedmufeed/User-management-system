import { useEffect, useRef } from "react"
import BlurBox from "../components/user/BlurBox"
import Circle from "../components/user/Circle"
import SlideText from "../components/user/SlideText"
import gsap from "gsap"
const Slide4 = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    useEffect(() => {
        gsap.fromTo(buttonRef.current,
            {
                x: -300,
                y: 150
            },
            {
                x: 0,
                y: 0,
                ease: "power2.out",
                duration: 1
            }
        )
    }, [])
    return (
        <div>

            {/* Black Circles */}
            <Circle
                initial={{ top: "73%", left: "-7%" }}
                animateTo={{ top: "80%", left: "45%" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem] bg-black"
            />

            <Circle
                initial={{ top: "-10%", right: "15%" }}
                animateTo={{ top: "-10%", right: "65%" }}
                className="w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem] bg-black"
            />

            {/* Green Blur */}
            <BlurBox
                initial={{ top: "25%", left: "50%" }}
                animateTo={{ top: "15%", left: "70%" }}
                className="w-full -top-20 left-1/2 md:left-1/6"
            />

            {/* Content */}
            <div className="flex flex-col justify-center items-center gap-15 sm:gap-40 text-center p-20">


                <SlideText
                    initial={{ x: 300, y: 130 }}
                    animateTo={{ x: 0, y: 0 }}
                    title="Quik App Integration"
                    subtitle="Instantly transfer photos and videos to your phone via the GoPro Quik app"
                />

                <button ref={buttonRef} className=" bg-[#0F2017] px-7 py-2 text-xs sm:text-base  rounded-full tracking-[0.15em] text-white shadow-[0_0_5px_1px_#3A9678] border border-[#3A9678]/70 ">
                    Discover More Features
                </button>


                <div className="flex flex-col sm:flex-row gap-8 sm:gap-96 justify-center items-center py-2 ">
                    <SlideText
                        initial={{ x: 500, y: -120 }}
                        animateTo={{ x: 0, y: 0 }}
                        title="Wireless Connectivity "
                        subtitle="Share content on the go with built-in Wi-Fi and Bluetooth"
                    />
                    <SlideText
                        initial={{ x: -120, y: -90 }}
                        animateTo={{ x: 0, y: 0 }}
                        title="Auto Upload to the Cloud"
                        subtitle="With GoPro subscription, your shots auto-upload when charging"
                    />
                </div>
            </div>


        </div>
    )
}

export default Slide4