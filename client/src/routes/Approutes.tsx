import { lazy } from "react"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
const Home=lazy(()=>import("../pages/user/Home"))
const Test=lazy(()=>import("../pages/user/Test"))
const Approutes = () => {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/test" element={<Test/>}/>
    </Routes>
  </Router>
  )
}

export default Approutes