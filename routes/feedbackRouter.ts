import { createFeedback, getAllFeedback } from "@/controller/feedbackController"
import express from "express"




const feedbackRouter = express.Router()


feedbackRouter.post("/add",createFeedback)
feedbackRouter.get("/all",getAllFeedback)

export default feedbackRouter