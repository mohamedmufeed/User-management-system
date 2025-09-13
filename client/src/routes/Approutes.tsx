import { lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// User Routes
const Home = lazy(() => import("../pages/user/Home"))
const Login = lazy(() => import("../pages/user/Login"))
const Profile = lazy(() => import('../pages/user/Profile'))

// Admin Routes
const Dashboard = lazy(()=>import('../pages/admin/Dashboard'))

const Approutes = () => {
  return (
    <Router>
      <Routes>

        {/* User routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin routes */}
        <Route path="/admin-dashboard" element={<Dashboard/>} />


      </Routes>
    </Router>
  )
}

export default Approutes