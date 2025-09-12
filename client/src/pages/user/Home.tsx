import Stars from "../../assets/DOTS 1.png";
import Navbar from "../../components/user/Navbar";
import GoPro from "../../assets/6dbdffc1e0d3e74061a59667317559ad 2.png"

const Home = () => {
    return (
        <div className="bg-[#0F0F0F] text-white h-screen w-full relative overflow-hidden">

            {/* Stars Background */}
            <img
                src={Stars}
                alt="Stars Img"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Navbar */}
            <Navbar />

            {/* Black Circles */}
            <div className="absolute -top-20 -left-16  md:-top-29 md:-left-16 w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]  bg-black rounded-full shadow-[0_0_19px_4px_rgba(34,197,94,0.3)] z-5"> </div>

            <div className="absolute -top-15 right-10 md:-top-40 md:right-60 w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem]  bg-black rounded-full shadow-[0_0_19px_4px_rgba(34,197,94,0.3)] z-5"> </div>

            {/* Green Blur */}
            <div className="absolute -top-20 left-1/2  md:left-1/6 transform -translate-x-1/2  w-[15rem] h-[50%] md:w-[23rem] md:h-[70%] lg:w-[28rem] lg:h-[80%] -rotate-45 rounded-full bg-radial from-green-700/40 to-green-700/40 blur-3xl opacity-50 z-5"></div>


            {/* Content */}
            <div className="flex flex-col md:flex-row relative justify-center items-center z-20 p-6 md:p-24">
                <div className="w-full md:w-4/6 flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-10 text-center md:text-left">
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-7xl">
                        The High Go pro <br /> hfg rg
                    </h1>
                    <p className="text-gray-200 font-semibold text-sm sm:text-lg md:text-xl opacity-60">
                        Heee hello gopera Lorem ipsum dolor sit mfkdnfked kdemfkef kemnfke fmenf i necessitatibus? At nesciunt hic reiciendis minus autem!
                    </p>
                </div>
                <div className="w-full md:w-2/6 mt-6 md:mt-0 flex justify-center md:justify-end">
                    <img src={GoPro} alt="gopro" className="max-w-full h-auto" />
                </div>
            </div>

            {/* Boxes */}
            <div className="z-20 relative  grid grid-cols-4 sm:flex flex-col sm:flex-row justify-center p-5 sm:p-10 w-full rounded-lg ">
                {Array(4).fill(0).map((_, i) => (
                    <div
                        key={i}
                        className={`
                            flex-1 p-5 text-center 
                            bg-black text-gray-200 opacity-60
                            ${i !== 3 ? "border-r-4 border-gray-800" : ""}
                        `}
                    >
                        <p>Lorum</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
