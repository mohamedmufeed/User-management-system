import Stars from "../../assets/DOTS 1.png";
import BlurBox from "../../components/user/ui/BlurBox";
import Circle from "../../components/user/ui/Circle";
import Navbar from "../../components/user/ui/Navbar";

const Profile = () => {
  return (
    <div className="bg-[#0F0F0F] text-white h-screen w-full relative overflow-hidden">
      <img
        src={Stars}
        alt="Stars Img"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <Navbar />

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
        className="-top-30 sm:-top-10 left-5/6 md:left-5/6 z-30"
      />

      {/* Profile Card */}
      <div className="relative z-30 flex justify-center items-center min-h-[80vh]">
        <div className="bg-black/60 backdrop-blur-lg border border-green-700/30 rounded-2xl shadow-xl px-8 py-10 w-[95%] max-w-md space-y-6">
          
          {/* Profile Header */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-green-900 flex items-center justify-center text-2xl font-bold">
              <span>MM</span> 
            </div>
            <h1 className="text-xl font-semibold">My Profile</h1>
          </div>

          {/* User Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between">
              <p className="font-medium">First Name:</p>
              <p className="text-white">Mohamed</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Last Name:</p>
              <p className="text-white">Mufeed</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Phone Number:</p>
              <p className="text-white">+91 9876543210</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg">
              Change Password
            </button>
            <button className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg">
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
