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

            {/* Black Circles  */}
            <div className="absolute -top-18 -left-20 w-[26rem] h-[26rem] bg-black rounded-full shadow-[0_0_19px_4px_rgba(34,197,94,0.3)] z-5"></div>

            <div className="absolute -top-35 left-220 w-[14rem] h-[14rem] bg-black rounded-full shadow-[0_0_19px_4px_rgba(34,197,94,0.3)] z-5"></div>

            {/* Green Blur */}
            <div className="absolute -top-30 w-92 h-11/12 -rotate-45 rounded-full bg-radial-[at_90%_95%] from-green-700/40 to-green-700/40 blur-3xl opacity-55 z-5"></div>


            {/* Content  */}
            <div className="flex relative  justify-center  items-center z-20 p-24 ">
                <div className="w-4/6 justify-center items-center space-y-10">
                    <h1 className="font-semibold text-7xl">The High Go pro <br /> hfg rg</h1>
                    <p className="text-gray-200 font-semibold text-xl opacity-60">Heee hello gopera Lorem ipsum dolor sit mfkdnfked kdemfkef kemnfke fmenf i necessitatibus? At nesciunt hic reiciendis minus autem!</p>
                </div>
                <div className="w-2/6">
                    <img src={GoPro} alt="gopro" />
                </div>
            </div>
            {/* Boxes */}
            <div className="z-20 relative flex justify-center p-10  w-full rounded-lg ">
                {Array(4).fill(0).map((_, i) => (
                    <div key={i} className={` bg-black p-5 gap-10 w-1/4 text-gray-20 opacity-60 ${i !== 3 ? "border-r-4 border-gray-800" : ""}`}>
                        <p>Lorum</p>
                        
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
