import React, { useRef, useEffect } from "react";
import gsap from "gsap";
type initial = { top?: string, left?: string, right?: string, bottom?: string }
interface Props {
    className: string;
    initial?: initial;
    animateTo?: gsap.TweenVars;
    duration?: number
}
    const Circle: React.FC<Props> = ({ className = "", initial = {}, animateTo, duration = 0.7 }) => {
    const circleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (circleRef.current && animateTo) {
            gsap.to(circleRef.current, {
                ...animateTo,
                duration,
                ease: "power3.Out",
            });
        }
    }, [animateTo, duration]);

    return (
        <div
            ref={circleRef}
            className={`absolute bg-black rounded-full shadow-[0_0_19px_4px_rgba(34,197,94,0.3)] z-5 ${className}`}
            style={initial}
        />
    );
};

export default Circle;
