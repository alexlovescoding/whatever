// define all your endpoints for the ticket model in this file
const router = require('express').Router();
const tc = require('../../../controllers/ticketController');

// default route
router.get("/", tc.getTicketList);

router.post("/", tc.createTicket);

router.get("/:id", tc.getTicket);

router.put("/:id", tc.updateTicket);

router.delete("/:id", tc.deleteTicket);

module.exports = router;