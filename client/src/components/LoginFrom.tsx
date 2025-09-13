const LoginFrom = () => {
    return (
        <div className="space-y-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-400 text-sm mt-2">
                    Enter your details below to continue
                </p>
            </div>



            {/* Phone Inputs */}
            <div className="flex gap-3">
                <input
                    className="w-1/4 px-3 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="text"
                    placeholder="+91"
                />
                <input
                    className="w-3/4 px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="number"
                    placeholder="Phone Number"
                />
            </div>



            <input
                className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
             focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                type="text"
                placeholder="Password"
            />



            <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40">
                Login
            </button>
        </div>
    )
}

export default LoginFrom