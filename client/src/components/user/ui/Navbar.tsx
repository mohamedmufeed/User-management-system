import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type { RootState } from "../../../redux/store/store"

const Navbar = () => {
    const navigate = useNavigate()
    const handleLoginClick = () => navigate("/login")
    const handleProfileClick = () => navigate("/profile")

    const firstName: string | undefined | null = useSelector((state: RootState) => state.auth.firstName)

    return (
        <header className="flex justify-end px-10 py-6 relative z-10">
            {firstName ? (
                <div
                    onClick={handleProfileClick}
                    className="w-10 h-10 flex items-center justify-center rounded-full  bg-black text-white shadow-[0_0_6px_1px_rgba(34,197,94,0.3)] animate-glow transition cursor-pointer hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.6)]"
                >
                    {(firstName as string)?.charAt(0).toUpperCase()}
                </div>
            ) : (
                <button
                    className="px-12 py-2 rounded-full bg-black text-white shadow-[0_0_6px_1px_rgba(34,197,94,0.3)] animate-glow transition cursor-pointer hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.6)]"
                    onClick={handleLoginClick}
                >
                    Log In
                </button>
            )}
        </header>
    )
}

export default Navbar
