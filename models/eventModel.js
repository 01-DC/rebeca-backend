const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	eventId: {
		type: String,
	},
	subtitle: String,
	category: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: {
			values: ["Team", "Individual"],
			message: "Not a valid type",
		},
		default: "Individual",
	},
	desc: {
		type: String,
		required: true,
	},
	image: String,
	startDate: {
		type: Date,
		required: true,
	},
	endDate: {
		type: Date,
		required: true,
	},
	prizes: [
		{
			standing: String,
			reward: String,
			color: String,
		},
	],
	schedule: [
		{
			title: String,
			desc: String,
			date: Date,
			time: String,
			duration: String,
			venue: String,
			locUrl: String,
		},
	],
	contacts: [
		{
			name: String,
			phone: String,
			email: String,
			photo: String,
		},
	],
	registration_amount: String,
	registration_amount_iiest: String,
	payment_link_iiest: String,
	payment_link: String,
	brochure_link: String,
	rules: [String],
	faq: [
		{
			question: String,
			answer: String,
		},
	],
	participants: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	],
	paid_participants: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	],
	teams: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Team",
		},
	],
	maxTeamSize: Number,
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event
