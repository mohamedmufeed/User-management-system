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
import { useNavigate } from "react-router-dom";

const slides = [Slide1, Slide2, Slide3, Slide4]

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const items = ["Ultra HD 5K Video", "Waterproof & Rugged", "Stabilization 3.0", "Instant Sharing"]
    const ActiveSlide = slides[activeSlide]
    const starRef = useRef(null)
    const user = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user._id && user.isAdmin) {
            navigate("/admin-dashboard")
        } else if (user.firstName) {
            navigate("/")
        }
    }, [user])

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
        <div className="bg-[#0F0F0F] text-white min-h-screen flex flex-col relative overflow-hidden">

            {/* Stars background */}
            <img
                ref={starRef}
                src={Stars}
                alt="Stars Img"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Navbar */}
            <Navbar />

            {/* Slide Section */}
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                <ActiveSlide />
            </div>

            {/* Slide Buttons */}
            <div className="z-20 relative w-full max-w-[1500px] mx-auto flex flex-wrap justify-center  p-4 sm:p-6">
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`
          cursor-pointer
          flex-1 min-w-[120px] sm:min-w-[150px]
          p-2 sm:p-4 text-center
          ${i !== items.length - 1 ? "border-r-0 sm:border-r-2 border-gray-800" : ""}
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
