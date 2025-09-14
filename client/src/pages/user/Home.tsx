import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/user/ui/Navbar";
import Slide1 from "../../slides/Slide1"
import Slide2 from "../../slides/Slide2";
import gsap from "gsap";
import Stars from "../../assets/DOTS 1.png";
import Slide3 from "../../slides/Slide3";
import Slide4 from "../../slides/Slide4";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const slides = [Slide1, Slide2, Slide3, Slide4]

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const items = ["Ultra HD 5K Video", "Waterproof & Rugged", "Stabilization 3.0", "Instant Sharing"]
    const ActiveSlide = slides[activeSlide]
    const starRef = useRef(null)
    const user=useSelector((state:RootState)=>state.auth)
    console.log(user)

    useEffect(() => {
        if (starRef.current) {
            gsap.to(starRef.current, {
                x: activeSlide * -100,
                y: activeSlide * 50,
                scale: 1 + activeSlide * 0.3,
                duration: 1,
                ease: "power2.Out"
            })
        }

    }, [activeSlide])
    return (
        <div className="bg-[#0F0F0F] text-white h-screen w-full relative overflow-hidden">

            {/* Stars Background */}
            <img
                ref={starRef}
                src={Stars}
                alt="Stars Img"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 "
            />

            {/* Navbar */}
            <Navbar />

            {/* Changing Section */}
            <div >
                <ActiveSlide />
            </div>


            {/* Buttons */}
            <div className="z-20 relative   grid grid-cols-4 sm:flex flex-col sm:flex-row justify-center p-5 sm:p-10 w-full rounded-lg ">
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`
                            cursor-pointer
                            flex-1 p-2  sm:p-5 text-center 
                            bg-black text-gray-200 opacity-60
                            ${i !== 3 ? "border-r-4 border-gray-800" : ""}
                            ${activeSlide === i
                                ? "bg-gray-400/55 text-white"
                                : "bg-black text-gray-300 opacity-60 hover:opacity-100"
                            }
                        `}
                    >
                        <button className="text-xs sm:text-base">{item}</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
