import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import { classifyNumber } from "./utils/classification"
import { getFunFact } from "./utils/funFact"
import asyncHandler from "express-async-handler"

const app = express()
app.use(express.json())
app.use(cors())


app.get("/api/classify-number", asyncHandler(async (req: Request, res: Response) => {
    const {number } = req.query
    // Validate the number
    if (!number || isNaN(Number(number))) {
         res.status(400).json({
            number: "alphabet" ,
            error: true
        })
        return 
    }
    const num = parseInt(number as string, 10)

    // Classifying the number
    const classification =  classifyNumber(num)

    // Getting a Fun fact
    const funFact =  await getFunFact(num)
    

    // const response = {
    //     "number": num,
    //     "is_prime": classification.isPrime,
    //     "is_perfect": classification.isPerfect,
    //     "properties": classification.properties,
    //     "digit_sum": classification.digitSum,
    //     "fun_fact": funFact
    // }
    const response = {
        number: num,
        is_prime: classification.isPrime, // No quotes needed
        is_perfect: classification.isPerfect,
        properties: classification.properties,
        digit_sum: classification.digitSum,
        fun_fact: funFact
    }

     res.status(200).json(response)
}))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});