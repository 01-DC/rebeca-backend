const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
	title: String,
	eventId: String,
	subtitle: String,
	category: String,
	type: {
		type: String,
		enum: {
			values: ["Team", "Individual"],
			message: "Not a valid type",
		},
		default: "Individual",
	},
	desc: String,
	image: String,
	startDate: Date,
	endDate: Date,
	prize_pool: String,
	rounds: [
		{
			title: String,
			desc: String,
			date: Date,
			time: String,
			duration: String,
			venue: String,
			locUrl: String,
			rules: [String],
		},
	],
	contacts: [
		{
			name: String,
			phone: String,
		},
	],
	registration_amount: String,
	registration_amount_iiest: String,
	payment_link_iiest: String,
	payment_link: String,
	brochure_link: String,
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event
