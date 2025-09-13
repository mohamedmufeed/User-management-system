import React, { useEffect, useRef } from "react"
import gsap from "gsap";
type initial = { top?: string, left?: string, right?: string, bottom?: string }
interface Props {
    className: string;
    initial?: initial;
    animateTo?: gsap.TweenVars;
    duration?: number
}

const BlurBox: React.FC<Props> = ({ className = "", initial = {}, animateTo, duration = 0.7 }) => {
    const blurRef = useRef(null)
    useEffect(() => {
        if (blurRef.current) {
            gsap.to(blurRef.current, {
                ...animateTo,
                duration,
                ease: "power3.Out",
            });
        }

    }, [animateTo, duration])
    return (
        <div ref={blurRef} className={`absolute transform -translate-x-1/2  w-[20rem] h-[50%] md:w-[33rem] md:h-[75%] lg:w-[28rem] lg:h-[80%] -rotate-45 rounded-full bg-radial from-green-700/30 to-green-700/30 blur-3xl opacity-50 z-5 ${className}`} style={initial}></div>
    )
}

export default BlurBox