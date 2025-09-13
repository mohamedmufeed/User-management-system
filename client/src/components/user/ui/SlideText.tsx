import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
interface Props {
    title: string;
    subtitle: string;
    className?: string;
    initial?: gsap.TweenVars;
    animateTo?: gsap.TweenVars;
    duration?: number
}
const SlideText: React.FC<Props> = ({ title, subtitle, className = "", initial, animateTo, duration = 1 }) => {
    const textRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (textRef.current && animateTo) {
            const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power.out" } })
            tl.fromTo(textRef.current,
                { ...initial }, { ...animateTo },);
        }
    }, [animateTo, duration])



    return (
        <div ref={textRef} className={`flex flex-col ${className} `}>
            <h1 className="text-white font-semibold text:2xl sm:text-3xl">{title}</h1>
            <p className="text-gray-400/55 text-xs sm:text-base">{subtitle}</p>
        </div>
    )
}

export default SlideText