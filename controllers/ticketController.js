// Define all of your ticket controller methods in this file that
// will be used as callbacks to your endpoints
const mongoose = require('mongoose');

const ticketSchema = require('../models/ticket');
const ticketModel = mongoose.model('ticket', ticketSchema);

module.exports = {
    getTicketList(req, res) {
        ticketModel.find({}).then(allTickets => {
            res.json(allTickets)
        }).catch(err => {
            res.status(500).json({error:'Bad entry'})
        })
    },
    createTicket(req, res){
        ticketModel.create(req.body).then(ticket => {
            res.status(201).json(ticket);
            
        }).catch(err => {
            res.status(500).json({error:'Bad entry'})
        })
    },
    getTicket(req, res){
        ticketModel.findById(req.params.id).then(ticket => {
            res.json(ticket);
        }).catch(err => {
            res.status(500).json({error:'Bad entry'})
        })
    },
    updateTicket(req, res){
        ticketModel.updateOne({_id:req.params.id}, req.body).then(ticket =>{
            res.status(204).send('');
        }).catch(err => {
            res.status(500).json({error:'Bad entry'})
        })
    },
    deleteTicket(req, res){
        ticketModel.deleteOne({_id:req.params.id}).then(ticket =>{
            res.status(204).send('');
        }).catch(err => {
            res.status(500).json({error:'Bad entry'})
        })
    }
}