
import Stars from "../../assets/DOTS 1.png";

const Dashboard = () => {
    const users = [
        { id: 1, firstName: "Mohamed", lastName: "Mufeed", phoneNumber: 23123424 },
        { id: 2, firstName: "John", lastName: "Doe", phoneNumber: 456754 },
        { id: 3, firstName: "Sara", lastName: "Smith", phoneNumber: 245235 },
    ];

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
                        {/* Search Box */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
               text-white placeholder-gray-400 focus:outline-none focus:ring-2 
               focus:ring-green-500 w-64"
                        />

                        {/* Add User Button */}
                        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 
                     hover:from-green-600 hover:to-green-800 transition shadow-md">
                            Add User
                        </button>

                        {/* Logout Button */}
                        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 
                     hover:from-green-600 hover:to-green-800 transition shadow-md">
                            Logout
                        </button>
                    </div>


                    {/* Glassmorphic Table */}
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
                                        key={user.id}
                                        className="border-b border-white/50 hover:bg-white/10 transition"
                                    >
                                        <td className="px-6 py-3">{user.firstName}</td>
                                        <td className="px-6 py-3">{user.lastName}</td>
                                        <td className="px-6 py-3">{user.phoneNumber}</td>
                                        <td className="px-6 py-3 flex justify-center gap-3">
                                            <button className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-md">
                                                View
                                            </button>
                                            <button className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r  from-[#28865d] to-[#0d2a1d] hover:from-[#28a16d] hover:to-[#1a1a1a] transition duration-300 shadow-md text-white">
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
