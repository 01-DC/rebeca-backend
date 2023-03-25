const express = require("express")
const eventController = require("../controllers/eventController")

const router = express.Router()

router.get("/", eventController.getAllEvents)

router.post("/:id", eventController.getEventById)

router.post("/create", eventController.createEvent)

module.exports = router
