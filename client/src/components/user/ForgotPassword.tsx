
const ForgotPassword = () => {
    return (
        <div className="relative z-20 flex justify-center items-center min-h-screen">
            <div className="bg-black/60 backdrop-blur-lg border-2 border-green-700/30 rounded-2xl px-10 py-12 w-[95%] max-w-md space-y-5 shadow-xl">

                <div className="text-center">
                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Enter your details below to continue
                    </p>
                </div>


                <input
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
             focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="text"
                    placeholder="Old Password"
                />

                <input
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
             focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="text"
                    placeholder="New Password"
                />
                <input
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
             focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="text"
                    placeholder="Confirm Password"
                />



                <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40">
                    Chnage
                </button>


            </div>
        </div>
    )
}

export default ForgotPassword