import type React from "react"
import type { IUser } from "../../types/userTypes"

interface Props {
  setIsModalIsOpen: (value: boolean) => void
  selectedUser:Partial<IUser>|null
}

const ViewDetailsCard:React.FC<Props> = ({setIsModalIsOpen , selectedUser}) => {
   const initials = selectedUser
    ? `${selectedUser.firstName?.[0]?.toUpperCase() ?? ""}${selectedUser.lastName?.[0]?.toUpperCase() ?? ""}`
    : ""
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-black/80 backdrop-blur-lg border border-green-700/30 rounded-2xl px-8 py-10 w-[95%] max-w-md space-y-6 shadow-xl relative">
        
        <button
         onClick={() => setIsModalIsOpen(false)}
          className="absolute top-7 right-7 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        

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
              <p className="text-white">{selectedUser?.firstName}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Last Name:</p>
              <p className="text-white">{selectedUser?.lastName}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Phone Number:</p>
              <p className="text-white">{selectedUser?.phone}</p>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default ViewDetailsCard