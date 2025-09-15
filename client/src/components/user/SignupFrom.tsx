import { useForm } from "react-hook-form"
import { signupSchema, type SignupFormData } from "../../validation/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { signup } from "../../service/user/authService"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../redux/store/store"
import { login } from "../../redux/features/authSlice"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"


const SignupFrom = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema)
    })

    const onsubmit = async (data: SignupFormData) => {
        try {
            setLoading(true)
            const userDetails = { firstName: data.firstName, lastName: data.lastName, phone: `${data.countryCode}${data.phone}`, password: data.password }
            const response = await signup(userDetails)
            if (!response.success) {
                setError(response.message)
                return
            }
            dispatch(login(response.user))
            navigate("/")
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            } else {
                setError("Invalid username and password")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Create Account</h1>
                <p className="text-gray-400 text-sm mt-2">
                    Enter your details below to get started
                </p>
            </div>
            {error && (
                <p className="text-red-500 text-xs text-center font-medium">{error}</p>
            )}


            <div className="flex gap-3">
                <div className="flex flex-col w-1/2">
                    <input
                        {...register("firstName")}
                        className="px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="text"
                        placeholder="First Name"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                </div>
                <div className="flex flex-col w-1/2">
                    <input
                        {...register("lastName")}
                        className="px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="text"
                        placeholder="Last Name"
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                </div>
            </div>


            <div className="flex gap-3">
                <div className="flex flex-col w-1/4">
                    <select
                        {...register("countryCode")}
                        className="px-3 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] text-gray-400"
                        defaultValue=""
                    >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                    </select>

                    {errors.countryCode && (
                        <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>
                    )}
                </div>

                <div className="flex flex-col w-3/4">
                    <input
                        {...register("phone")}
                        className="px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="number"
                        placeholder="Phone Number"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                </div>
            </div>


            <div className="flex flex-col relative">
                <input
                    {...register("password")}
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent  focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400 pr-10"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                />

           
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>

                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
            </div>

            <div className="flex flex-col relative">
                <input
                    {...register("confirmPassword")}
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                />

                <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
            </div>


            <div className="flex items-center gap-2">
                <input
                    {...register("terms")}
                    type="checkbox"
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-[#28865d]"
                />
                <p className="text-gray-400 text-sm">Accept Terms & Conditions</p>
            </div>
            {errors.terms && (
                <p className="text-red-500 text-xs">{errors.terms.message}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40${loading ? "opacity-50 cursor-not-allowed" : ""}`} >
                {loading ? "Creating..." : "Create Account"}
            </button>
        </form>
    )
}

export default SignupFrom
