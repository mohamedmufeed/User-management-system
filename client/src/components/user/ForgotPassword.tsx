import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPasswordSchema, type ForgotPasswordFormData, } from "../../validation/zod"
import { changePassword } from "../../service/user/profileService"
import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store/store"



interface Props {
    setIsModalIsOpen: (value: boolean) => void

}
const ForgotPassword: React.FC<Props> = ({ setIsModalIsOpen }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()
    const [successLog, setSuccessLog] = useState<string>()
    const userId = useSelector((state: RootState) => state.auth._id)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema)
    })

    const onsubmit = async (data: ForgotPasswordFormData) => {
        try {
            if (!userId) return
            setError(undefined)
            setSuccessLog(undefined)
            setLoading(true)
            const { password, newPassword } = data
            const response = await changePassword(userId, password, newPassword)
            if (!response.success) {
                setError(response.message)
                return
            }
            setSuccessLog(response.message)
            reset()
            setTimeout(() => {
                setIsModalIsOpen(false)
            }, 2000);

        } catch (error) {
            console.error("the error", error)
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError("Invalid password")
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit(onsubmit)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-black/80 backdrop-blur-lg border border-green-700/30 rounded-2xl px-8 py-10 w-[95%] max-w-md space-y-6 shadow-xl relative">

 
                <button
                    onClick={() => !loading && setIsModalIsOpen(false)}
                    className="absolute top-7 right-7 text-gray-400 hover:text-white">
                    ✕
                </button>

                <div className="text-center">
                    <h1 className="text-2xl font-bold">Change Password</h1>
                    <p className="text-gray-400 text-sm mt-2">
                        Enter your details below to continue
                    </p>
                </div>
                {(error || successLog) && (
                    <p className={`${error ? "text-red-500" : "text-green-500"} text-xs text-center font-medium`}>
                        {error || successLog}
                    </p>
                )}

                <div>
                    <input
                        {...register("password")}
                        autoComplete="current-password"
                        className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
                 focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="password"
                        placeholder="Old Password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                    )}
                </div>


                <div className="flex flex-col">
                    <input
                        {...register("newPassword")}
                        autoComplete="new-password"
                        className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
                 focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="password"
                        placeholder="Password"
                    />
                    {errors.newPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
                    )}
                </div>

                <div className="flex flex-col">
                    <input
                        {...register("confirmPassword")}
                        autoComplete="new-password"
                        className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent 
                focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-lg text-white font-semibold  bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
                    {loading ? "Changing..." : "Change"}
                </button>
            </div>
        </form>
    )
}

export default ForgotPassword