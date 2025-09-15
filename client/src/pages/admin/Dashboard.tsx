
import { useCallback, useEffect, useRef, useState } from "react";
import Stars from "../../assets/DOTS 1.png";
import EditUserModal from "../../components/admin/EditUserModal";
import AddUserModal from "../../components/admin/AddUserModal";
import ViewDetailsCard from "../../components/admin/ViewDetailsCard";
import _ from "lodash"
import { getUsers } from "../../service/admin/dashboardService";
import type { IUser } from "../../types/userTypes";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const prevRequestRef = useRef<AbortController | null>(null)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [totalUsers, setTotalUsers] = useState(0);
    const [users, setUsers] = useState<Partial<IUser>[]>([])
    const userPerPage = 5;

    const fetchUsers = async (page: number, query = "") => {
        if (prevRequestRef.current) {
            prevRequestRef.current.abort()
        }
        const abortController = new AbortController()
        prevRequestRef.current = abortController
        try {
            setLoading(true)
            const response = await getUsers(page, userPerPage, query, abortController.signal)
            if (prevRequestRef.current === abortController) {
                setUsers(response.users)
                setTotalPages(response.totalPages)
                setTotalUsers(response.totalUsers)
            }
        } catch (error) {
            if (!(error instanceof DOMException && error.name === 'AbortError')) {
                console.error("Error fetching users:", error);
            }
        } finally {
            if (prevRequestRef.current === abortController) {
                setLoading(false)
            }
        }
    }


    const debouncedFetch = useCallback(
        _.debounce((page: number, query: string) => {
            fetchUsers(page, query)
        }, 300)
        , [fetchUsers])


    useEffect(() => {
        if (searchQuery) {
            debouncedFetch(currentPage, searchQuery)
        } else {
            fetchUsers(currentPage, searchQuery)
        }
    }, [currentPage, location])


    const handleSearch = (query: string) => {
        setSearchQuery(query)
        if (currentPage !== 1) setCurrentPage(1);
        debouncedFetch(1, query)
    }
    useEffect(() => {
        return () => {
            debouncedFetch.cancel();
            if (prevRequestRef.current) {
                prevRequestRef.current.abort();
            }
        };
    }, []);

    return (
        <div className="bg-[#0F0F0F] text-white h-screen w-full relative overflow-hidden">
            {/* Background */}
            <img
                src={Stars}
                alt="Stars Img"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />


            {/* Conent */}
            <div className="relative z-30 flex h-full px-6">
                <div className="w-full  rounded-2xl p-8 shadow-2xl overflow-x-auto">
                    <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>


                    <div className="flex justify-end items-center gap-4 mb-6">

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 w-64" />

                        <button
                            onClick={() => setIsAddUserModalOpen(true)}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-800 to-green-900  hover:from-green-900 hover:to-green-950 transition shadow-md">
                            Add User
                        </button>

                        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-800 to-green-900  hover:from-green-900 hover:to-green-950 transition shadow-md">
                            Logout
                        </button>
                    </div>


                    <div>
                        {isAddUserModalOpen && <AddUserModal setIsModalIsOpen={setIsAddUserModalOpen} />}
                        {isEditUserModalOpen && <EditUserModal setIsModalIsOpen={setIsEditUserModalOpen} />}
                        {isViewModalOpen && <ViewDetailsCard setIsModalIsOpen={setIsViewModalOpen} />}

                    </div>


                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-black/90 backdrop-blur-lg border-2 border-green-700/30 text-gray-300">
                                <tr>
                                    <th className="px-6 py-3">First Name</th>
                                    <th className="px-6 py-3">Last Name</th>
                                    <th className="px-6 py-3">Phone Number</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="bg-black/10 backdrop-blur-lg border-2 border-green-700/30">
                                {users.map((user) => (
                                    <tr
                                        key={user._id}
                                        className="border-b border-white/50 hover:bg-white/10 transition"
                                    >
                                        <td className="px-6 py-3">{user.firstName}</td>
                                        <td className="px-6 py-3">{user.lastName}</td>
                                        <td className="px-6 py-3">{user.phone}</td>
                                        <td className="px-6 py-3 flex justify-center gap-3">
                                            <button
                                                onClick={() => setIsViewModalOpen(true)}
                                                className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-md">
                                                View
                                            </button>
                                            <button
                                                onClick={() => setIsEditUserModalOpen(true)}
                                                className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r  from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-md text-white">
                                                Edit
                                            </button>
                                            <button className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r text-white from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-md">
                                                Block
                                            </button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                    {loading && <p className="text-center text-gray-400 mt-4">Loading...</p>}
                    <div className="flex justify-center items-center gap-2 mt-6">

                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className={`px-4 py-2 rounded-lg shadow-md transition
                      ${currentPage === 1
                                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-950 text-white"
                                }`}
                        >
                            Prev
                        </button>


                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-lg transition shadow-md
                        ${currentPage === page
                                        ? "bg-gradient-to-r from-green-700 to-green-900 text-white font-bold"
                                        : "bg-black/40 border border-green-900/40 text-gray-300 hover:bg-green-900/40"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className={`px-4 py-2 rounded-lg shadow-md transition
                             ${currentPage === totalPages
                                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-green-800 to-green-900 hover:from-green-900 hover:to-green-950 text-white"
                                }`}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
