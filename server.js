const mongoose = require("mongoose")
const dotenv = require("dotenv")

// Global exception catcher
process.on("uncaughtException", (err) => {
	console.log("Uncaught Exception 💥")
	console.log(err.name, err.message)
	process.exit(1)
})

dotenv.config()
const app = require("./app")

const DB = process.env.DATABASE

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB Connection Successful"))

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
	console.log(
		`App running on port ${port} in ${process.env.NODE_ENV} mode...`
	)
})

// Global Catcher Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
	console.log("Unhandled Promise Rejection 💥")
	console.log(err.name, err.message)
	server.close(() => {
		process.exit(1)
	})
})
