import React, { useState } from "react"
import { toggleBlockUser } from "../../service/admin/dashboardService"
import type { IUser } from "../../types/userTypes"

interface Props {
  setIsModalIsOpen: (value: boolean) => void
  selectedUserId: string
  selectedStatus: boolean
  setUsers: React.Dispatch<React.SetStateAction<Partial<IUser>[]>>
}

const ConfirmationModal: React.FC<Props> = ({ setIsModalIsOpen, selectedStatus, selectedUserId, setUsers }) => {
  const [loading, setLoading] = useState(false)

  const handleConfirm = async () => {
    try {
      setLoading(true)
      const response = await toggleBlockUser(selectedUserId)
      if (response.success) {
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user._id === selectedUserId
              ? { ...user, isBlocked: !selectedStatus }
              : user
          )
        )
      }
      setIsModalIsOpen(false)
    } catch (error) {
      console.error("Action failed", error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-black/80 backdrop-blur-lg border border-green-700/30 rounded-2xl px-8 py-10 w-[95%] max-w-md space-y-6 shadow-xl relative">

        {/* Close */}
        <button
          onClick={() => setIsModalIsOpen(false)}
          className="absolute top-7 right-7 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Confirmation</h1>
          <p className="text-gray-400 text-sm mt-2">
            {`Are you sure you want to ${selectedStatus ? "unblock" : "block"} this user?`}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={() => setIsModalIsOpen(false)}
            className="w-1/2 px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className={`w-1/2 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-lg border border-[#28865d]/40 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
