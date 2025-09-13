import type React from "react";

interface Props {
    title: string;
    subtitle: string;
    className?: string;
    align?: "left" | "center" | "right";
}
const SlideText: React.FC<Props> = ({ title, subtitle,  className = "", align }) => {
    return (
        <div className={`flex flex-col ${className} text-${align}`}>
            <h1 className="text-white font-semibold text-3xl">{title}</h1>
            <p className="text-gray-400/55">{subtitle}</p>
        </div>
    )
}

export default SlideText