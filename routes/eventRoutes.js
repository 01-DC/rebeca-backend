const express = require("express")
const eventController = require("../controllers/eventController")
const authController = require("../controllers/authController")

const router = express.Router()

// // router.use(authController.protect);
// router.post(
// 	"/register",
// 	authController.protect,
// 	eventController.registerForEvent
// )
// router.post(
// 	"/registerTeam",
// 	authController.protect,
// 	eventController.createTeamForEvent
// )
// router.post(
// 	"/joinTeam",
// 	authController.protect,
// 	eventController.joinTeamForEvent
// )
// router.get("/:eventId/team/:teamId/pay", eventController.teamPay)
// router.get(
// 	"/:eventId/participant/:participantId/pay",
// 	eventController.participantPay
// )

// // router.use(authController.restrictTo("admin"));
// router.post(
// 	"/create",
// 	authController.protect,
// 	authController.restrictTo("admin"),
// 	eventController.createEvent
// )
// router.patch(
// 	"/update/:id",
// 	authController.protect,
// 	authController.restrictTo("admin"),
// 	eventController.updateEvent
// )
// router.delete(
// 	"/delete/:id",
// 	authController.protect,
// 	authController.restrictTo("admin"),
// 	eventController.deleteEvent
// )
// router.get(
// 	"/:id/participants",
// 	authController.protect,
// 	authController.restrictTo("admin"),
// 	eventController.getEventParticipants
// )
// router.get(
// 	"/:id/teams",
// 	authController.protect,
// 	authController.restrictTo("admin"),
// 	eventController.getEventTeams
// )

router.get("/", eventController.getAllEvents)
router.post("/:id", eventController.getEventById)

module.exports = router
