const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDb = require("./config/connectDb")

dotenv.config()
connectDb()

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

app.use("/api/v1/events", require("./routes/eventRoutes"))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
