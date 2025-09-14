import { useDispatch, useSelector } from "react-redux";
import Stars from "../../assets/DOTS 1.png";
import BlurBox from "../../components/user/ui/BlurBox";
import Circle from "../../components/user/ui/Circle";
import Navbar from "../../components/user/ui/Navbar";
import type { AppDispatch, RootState } from "../../redux/store/store";
import { getProfile } from "../../service/user/profileService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IUser } from "../../types/userTypes";
import ForgotPassword from "../../components/user/ForgotPassword";
import { logout as logoutApi } from "../../service/user/authService";
import { logout } from "../../redux/features/authSlice";


const Profile = () => {
  const [profile, setProfile] = useState<IUser | null>(null)
  const userId = useSelector((state: RootState) => state.auth._id)
  const [isModlaOpen, setIsModalIsOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (!userId) {
      navigate("/login")
      return
    }
    const fetchProfile = async () => {
      try {

        const response = await getProfile(userId)
        setProfile(response.user)
      } catch (error) {
        console.error("Erro on fetching user profile")
      }
    }
    fetchProfile()

  }, [userId])

  const handleLogout = async () => {
    try {
      const response = await logoutApi()
      if (!response.success) {
        console.error(response.message)
      }
      dispatch(logout())
      navigate("/")
    } catch (error) {
      console.error("Error on Logout", error)
    }
  }

  const initials = profile
    ? `${profile.firstName?.[0]?.toUpperCase() ?? ""}${profile.lastName?.[0]?.toUpperCase() ?? ""}`
    : ""
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
      {isModlaOpen && (
        <div>
          <ForgotPassword setIsModalIsOpen={setIsModalIsOpen} />
        </div>
      )}


      {/* Profile Card */}
      <div className="relative z-30 flex justify-center items-center min-h-[80vh]">
        <div className="bg-black/60 backdrop-blur-lg border border-green-700/30 rounded-2xl shadow-xl px-8 py-10 w-[95%] max-w-md space-y-6">

          {/* Profile Header */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-green-900 flex items-center justify-center text-2xl font-bold">
              <span>{initials}</span>
            </div>
            <h1 className="text-xl font-semibold">My Profile</h1>
          </div>

          {/* User Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between">
              <p className="font-medium">First Name:</p>
              <p className="text-white">{profile?.firstName}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Last Name:</p>
              <p className="text-white">{profile?.lastName}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Phone Number:</p>
              <p className="text-white">{profile?.phone}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => setIsModalIsOpen((prev) => !prev)}
              className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg">
              Change Password
            </button>
            <button 
            onClick={handleLogout}
            className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg">
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
