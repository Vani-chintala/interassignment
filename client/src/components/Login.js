

import "./Login.css"
import { useState } from "react"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message,setMessage] = useState("")

    const submitLogin = async(e) => {
        e.preventDefault()
        if(!email || !password){
            alert("Please enter input credentials")
        }else if(!email.includes("@")){
            alert("Please enter valid email")
        }else if(password.length < 6){
            alert("Password should atleast contain 6 characters")
        }else{
            try{
                const consoledata = {email,password}
                
            const response = await fetch('http://localhost:4000/user/login',{
              'method' : 'POST',
              'headers' : {
                'Content-Type' : 'application/json',
              },
              'body' : JSON.stringify(consoledata)
            })
            const data = await response.json()
            console.log(data)
            setMessage("User logged in successfully")
            }catch(error){
             console.log(error)
             setMessage("Something wrong")
            }
        }
    }
    return (
        <div className="container-1">
            <div width="400px" height="400px" className="login-container">
                <div className="title">
                    <h4>Login Form</h4>
                </div>
                <form onSubmit={submitLogin}>

                    <label htmlFor="email" >
                        <h5>Email</h5>
                        <input type="email" id="email" value={email} placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password" >
                        <h5>Password</h5>
                        <input type="password" id="password" value={password} placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </label><br /><br />
                    <button type="submit">Login</button>
                    <br/>
                    <i>{message}</i>
                </form>
                <p>New User,please <a href="/signup">Signup</a></p>
            </div>

        </div>
    )
}

export default Login