

import "./Home.css"
//import backgroundimage from "../images/ackgroundimage.jpg"
const Home = () => {
    return(
     <div className="backimage">
        <br/><br/>
        <h1>Welcome page</h1>
        <button><a href= "/signup">Signup</a></button>
        <button><a href= "/login">Login</a></button>
     </div>
    )
}

export default Home