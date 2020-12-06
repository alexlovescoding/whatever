// Define ticket model in this file -
//
// - you will define schema and also export the model (see Pokemon-v7 or
//   authorApp)
const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    assignedTo: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = ticketSchema
