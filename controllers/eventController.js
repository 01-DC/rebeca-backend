const Event = require("../models/eventModel")

const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find({})

		res.status(200).json(events)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const getEventById = async (req, res) => {
	try {
		const event = await Event.findOne({ eventId: req.params.id })

		if (!event) {
			res.status(404).json({ message: "Event does not exist" })
			return
		}
		res.status(200).json(event)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const createEvent = async (req, res, next) => {
	try {
		const event = await Event.create(req.body)

		const count = await Event.countDocuments()
		event.eventId = `${count}`
		await event.save()

		res.status(201).json(event)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

module.exports = { getAllEvents, getEventById, createEvent }
