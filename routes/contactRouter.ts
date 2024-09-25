import { postContact } from "@/controller/contactController"
import express from "express"




const contactRouter = express.Router()

contactRouter.post("/send",postContact)





export default contactRouter