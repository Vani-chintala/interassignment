import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import {Routes,Route } from "react-router-dom"

const AllRoutes = () => {
    return(
     <Routes>
        <Route  exact={true} path="/" element={<Home/>}/>
        
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
     </Routes>
    )
}

export default AllRoutes