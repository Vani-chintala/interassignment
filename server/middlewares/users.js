
import jwt from "jsonwebtoken"


import dotenv from 'dotenv'
dotenv.config()

const usersauth = (req,res,next) => {
    
    try{
        //checking req from client has token or not
        const token = req.headers.authorization.split(" ")[1]
        //check token is valid or not
        const decodeData = jwt.verify(token, process.env.JWT_SECRET) //users is secret value we have used
        req.userId = decodeData?.id
        next()
    }catch(error){
         console.log(error)
    }
}

export default usersauth