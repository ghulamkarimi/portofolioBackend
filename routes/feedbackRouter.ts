
import express from "express"
import { createFeedback, getAllFeedback } from "../controller/feedbackController"




const feedbackRouter = express.Router()


feedbackRouter.post("/add",createFeedback)
feedbackRouter.get("/all",getAllFeedback)

export default feedbackRouter