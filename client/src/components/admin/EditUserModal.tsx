import type React from "react"

interface Props {
  setIsModalIsOpen: (value: boolean) => void
}

const EditUserModal: React.FC<Props> = ({ setIsModalIsOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-black/80 backdrop-blur-lg border border-green-700/30 rounded-2xl px-8 py-10 w-[95%] max-w-md space-y-6 shadow-xl relative">
        
        <button
          onClick={() => setIsModalIsOpen(false)}
          className="absolute top-7 right-7 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Edit User</h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter details below to edit a  account
          </p>
        </div>

   
        <div>
          <input
            className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent
            focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
            type="text"
            placeholder="First Name"
          />
        </div>


        <div>
          <input
            className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent
            focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
            type="text"
            placeholder="Last Name"
          />
        </div>


         <div className="flex gap-3">
                <div className="flex flex-col w-1/4">
                    <select
                        // {...register("countryCode")}
                        className="px-3 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] text-gray-400"
                        defaultValue=""
                    >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                    </select>

                    {/* {errors.countryCode && (
                        <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>
                    )} */}
                </div>

                <div className="flex flex-col w-3/4">
                    <input
                        // {...register("phone")}
                        className="px-4 py-2 rounded-md border border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#28865d] placeholder-gray-400"
                        type="number"
                        placeholder="Phone Number"
                    />
                    {/* {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )} */}
                </div>
            </div>


        <button
          type="button"
          className="w-full py-3 rounded-lg text-white font-semibold
          bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a]
          transition duration-300 shadow-lg border border-[#28865d]/40"
        >
Save changes
        </button>
      </div>
    </div>
  )
}

export default EditUserModal
