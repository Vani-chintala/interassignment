
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=> {
  res.send("Welcome to the assignment")
})


app.use('/user',userRoutes)

const PORT = process.env.PORT || 4000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => app.listen(PORT,() =>{
      console.log(`server is running on port ${PORT}`)
  }
  ))
  .catch((err) =>
    console.log(err.message)
  )

  

  