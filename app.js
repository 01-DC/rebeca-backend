const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.use(cors())

// const userRouter = require("./routes/userRoutes")
const eventRouter = require("./routes/eventRoutes")
// const workshopRouter = require("./routes/workshopRoutes")
// const notifRouter = require("./routes/notifRoutes")
const AppError = require("./utils/appError")
// const globalErrorHandler = require("./controllers/errorController")

// Development Logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"))
}
app.use(express.json())
app.use(cookieParser())

// Routes
// app.use("/api/v1/users", userRouter)
app.use("/api/v1/events", eventRouter)
// app.use("/api/v1/workshops", workshopRouter)
// app.use("/api/v1/notif", notifRouter)

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app
