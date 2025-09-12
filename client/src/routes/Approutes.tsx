import { lazy } from "react"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
const Home=lazy(()=>import("../pages/user/Home"))
const Approutes = () => {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
  )
}

export default Approutes