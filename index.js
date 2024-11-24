import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello AutoGTFs ")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})