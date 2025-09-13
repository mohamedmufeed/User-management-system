import { useState } from "react";
import Stars from "../../assets/DOTS 1.png";
import LoginFrom from "../../components/LoginFrom";
import SignupFrom from "../../components/user/SignupFrom";
import BlurBox from "../../components/user/ui/BlurBox";
import Circle from "../../components/user/ui/Circle";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="bg-[#0F0F0F] text-white h-screen w-full relative overflow-hidden">
      {/* Background Stars */}
      <img
        src={Stars}
        alt="Stars Img"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Circles */}
      <Circle
        initial={{ top: "70%", left: "80%" }}
        className="w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem]"
      />
      <Circle
        initial={{ top: "0%", right: "90%" }}
        className="w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem]"
      />

      {/* Blur Effect */}
      <BlurBox
        animateTo={{ top: "-14%" }}
        className="-top-30 sm:-top-10 left-5/6 md:left-5/6 z-30 o"
      />

      {/* Login Form */}

      <div>
        <div className="relative z-20 flex justify-center items-center min-h-screen">
          <div className="bg-black/60 backdrop-blur-lg border-2 border-green-700/30 rounded-2xl px-10 py-12 w-[95%] max-w-md  space-y-5 shadow-xl">

            <div>
              {isLogin ? <LoginFrom /> : <SignupFrom />}
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="flex-1 h-px bg-green-700/30"></span>
              Or {isLogin ? "login with" : "register with"}
              <span className="flex-1 h-px bg-green-700/30"></span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-2 flex items-center justify-center gap-2 border border-gray-600 rounded-lg hover:bg-white/10 transition">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                Google
              </button>
              <button className="flex-1 py-2 flex items-center justify-center gap-2 border border-gray-600 rounded-lg hover:bg-white/10 transition">
                <img src="https://www.svgrepo.com/show/349442/apple.svg" alt="Apple" className="w-5 h-5" />
                Apple
              </button>
            </div>
            <p className="text-center text-sm text-gray-400">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-green-800 hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-green-800 hover:underline"
                  >
                    Log In
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;
