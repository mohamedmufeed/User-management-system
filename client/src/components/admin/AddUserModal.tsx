import { zodResolver } from "@hookform/resolvers/zod"
import type React from "react"
import { useForm } from "react-hook-form"
import { type AddUserFromData, addUserSchema } from "../../validation/zod"
import { addUser } from "../../service/admin/dashboardService"
import { useState } from "react"
import type { IUser } from "../../types/userTypes"
import { Eye, EyeOff } from "lucide-react"

interface Props {
  setIsModalIsOpen: (value: boolean) => void
  setUsers: React.Dispatch<React.SetStateAction<Partial<IUser>[]>>
}

const AddUserModal: React.FC<Props> = ({ setIsModalIsOpen, setUsers }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AddUserFromData>({
    resolver: zodResolver(addUserSchema)
  })
  const onSubmit = async (data: AddUserFromData) => {
    try {
      setLoading(true)
      const updateData = { firstName: data.firstName, lastName: data.lastName, phone: `${data.countryCode}${data.phone}`, password: data.password, }
      const response = await addUser(updateData)
      if (!response.success) {
        setError(response.message)
        return
      }
      setUsers(prevUsers => [...prevUsers, response.user])
      setIsModalIsOpen(false)
    } catch (error) {
      console.error("Action failed", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-black/80 backdrop-blur-lg border border-green-700/30 rounded-2xl px-8 py-10 w-[95%] max-w-md space-y-6 shadow-xl relative">

        <button
          onClick={() => setIsModalIsOpen(false)}
          className="absolute top-7 right-7 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Add New User</h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter details below to create a new account
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-xs text-center font-medium">{error}</p>
        )}
        <div>
          <input
            {...register("firstName")}
            className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent
            focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
            type="text"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>


        <div>
          <input
            {...register("lastName")}
            className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent
            focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40${loading ? "opacity-50 cursor-not-allowed" : ""}`} >
          {loading ? "Adding User..." : "Add User"}

        </button>



      </div>
    </form>
  )
}

export default AddUserModal
