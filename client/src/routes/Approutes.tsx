import { lazy } from "react"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
const Home=lazy(()=>import("../pages/user/Home"))
const Login =lazy(()=>import("../pages/user/Login"))
const Approutes = () => {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
  )
}

export default Approutes