import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate=useNavigate()
    const handleClick=()=>navigate("/login")
    return (
        <header className="flex justify-end px-10 py-6 relative z-10">
            <button className="px-12 py-2 rounded-full bg-black text-white shadow-[0_0_6px_1px_rgba(34,197,94,0.3)] animate-glow transition cursor-pointer hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.6)]" onClick={handleClick}>
                Log In
            </button>
        </header>
    )
}

export default Navbar
