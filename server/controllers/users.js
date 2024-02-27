
import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export const SignupController = async (req, res) => {
  //req,res from frontend
  const { name, email, password } = req.body
  try {
    const existinguser = await Users.findOne({ email }) //here users is database
    if (existinguser) {
      return res.status(404).json({ message: "User already exists" })
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await Users.create({ name, email, password: hashedPassword })
    const token = jwt.sign({ email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({ result: newUser, token })
  } catch (err) {
    res.status(500).json("something went wrong...")
  }
}


export const LoginController = async (req, res) => {
  const { email, password } = req.body
  try {
    const existingUser = await Users.findOne({ email })
    if (!existingUser) {
      return res.status(404).json({ message: "User doesnot exists" })
    } else {
      const passwordCheck = await bcrypt.compare(password, existingUser.password)
      if (!passwordCheck) {
        return res.status(405).json({ message: "invalid credentials" })
      } else {
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id },
          process.env.JWT_SECRET, { expiresIn: '3h' })
        return res.status(201).json({ result: existingUser, token })
      }
    }
  }
  catch (err) {
    return res.status(501).json({ message: "something wrong" })
  }
}