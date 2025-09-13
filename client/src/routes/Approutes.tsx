import { lazy } from "react"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
const Home=lazy(()=>import("../pages/user/Home"))
const Login =lazy(()=>import("../pages/user/Login"))
const Profile=lazy(()=>import('../pages/user/Profile'))
const Approutes = () => {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route  path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
  )
}

export default Approutes