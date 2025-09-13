import BlurBox from "../components/user/BlurBox"
import Circle from "../components/user/Circle"

const Slide3 = () => {
    return (
        <div>
            {/* Black Circles */}
            <Circle
                initial={{ top: "14rem", left: "-12rem" }}
                animateTo={{ top: "39rem", left: "-7rem" }}
                className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]" />

            <Circle
                initial={{ top: "3rem", right: "-5rem" }}
                animateTo={{ top: "-7rem", right: "13rem" }}
                className=" w-[6rem] h-[6rem]  md:w-[10rem] md:h-[10rem]   lg:w-[14rem] lg:h-[14rem] "
            />
            {/* Green Blur */}
            <BlurBox
                initial={{ top: "12rem", left: "12rem" }}
                animateTo={{ top: "25rem", left: "50rem" }}
                className="  w-full  -top-20 left-1/2  md:left-1/6"
            />

        </div>
    )
}

export default Slide3