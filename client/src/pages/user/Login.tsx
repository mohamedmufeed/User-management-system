import { useState } from "react";
import Stars from "../../assets/DOTS 1.png";
import LoginFrom from "../../components/user/LoginFrom";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="white"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.6-18.8-26.9-47.3-41.6-86.1-44-36.2-2.2-76.4 21.4-90.6 21.4-15.1 0-50.4-20.5-78.1-20-59.4.9-122.2 44.5-122.2 133.9 0 28.3 5.2 57.6 15.6 87.8 13.9 40.1 64.5 138.3 117.2 136.6 27.6-.7 47.1-19.6 82.9-19.6 34.9 0 53.3 19.6 82.9 19.1 53.6-.8 100.5-87.4 113.9-127.7-72.1-34.1-67.6-100.3-67.8-103.9zM260.5 96c27.2-32.2 24.7-61.5 24-72.1-24.1 1.4-52 16.4-68.9 36.1-17.8 20.8-28.2 46.5-25.9 74.1 26.2 2 51.9-11.2 70.8-38.1z" />
                </svg>

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
