
import "./Signup.css"
import { useState } from "react"

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const submitSignup = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            alert("Please enter input credentials")
        } else if (!email.includes("@")) {
            alert("Please enter valid email")
        } else if (password.length < 6) {
            alert("Password should atleast contain 6 characters")
        } else {
            try {
                const consoledata = { name,email,password }
                console.log(consoledata)
                const response = await fetch('http://localhost:4000/user/signup', {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/json',
                    },
                    'body': JSON.stringify(consoledata)
                })
                const data = await response.json()
                console.log(data)
                setMessage("Signup successful")
            }
            catch (error) {
                console.log(error)
                setMessage("Something wrong")
            }
        }
    }

    return (
        <div className="container-2">
            <div width="400px" height="400px" className="signup-container">
                <div className="title">
                    <h4>Signup Form</h4>
                </div>
                <form onSubmit={submitSignup}>
                    <label htmlFor="name">
                        <h5>Full Name</h5>
                        <input type="text" id="name" value={name} placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor="email">
                        <h5>Email</h5>
                        <input type="email" id="email" value={email} placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">
                        <h5>Password</h5>
                        <input type="password" id="password" value={password} placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </label><br /><br />
                    <button type="submit">Signup</button><br />
                    <i>{message}</i>
                </form>
                <p>Already have an account?please <a href="/login">Login</a></p>
            </div>
        </div>
    )
}

export default Signup