import { useForm } from "react-hook-form"
import { loginSchema, type LoginFormData } from "../../validation/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../redux/store/store"
import { login as loginapi } from "../../service/user/authService"
import { login } from "../../redux/features/authSlice"
import { useNavigate } from "react-router-dom"


const LoginFrom = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })
    const onsubmit = async (data: LoginFormData) => {
        try {
            setLoading(true)
            const details = { phone: `${data.countryCode}${data.phone}`, password: data.password }
            const response = await loginapi(details)
            if (!response.success) {
                setError(response.message)
            }
            dispatch(login(response.user))
            navigate("/")
        } catch (error) {
            console.log("the error", error)
            if (error instanceof Error) {
                setError(error.message)
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
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-400 text-sm mt-2">
                    Enter your details below to continue
                </p>
            </div>

            {error && (
                <p className="text-red-500 text-xs text-center font-medium">{error}</p>
            )}

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

            <div className="flex flex-col">
                <input
                    {...register("password")}
                    className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
                focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                    type="password"
                    placeholder="Password"
                />
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold  bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
                {loading ? "Logging..." : "Login"}
            </button>

        </form>
    )
}

export default LoginFrom