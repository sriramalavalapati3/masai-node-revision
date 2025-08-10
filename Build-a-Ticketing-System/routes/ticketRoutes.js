const express = require('express');
const router = express.Router();
const controller = require('../controllers/ticketControllers');
const dataCheck = require('../middleware/dataCheck');

// Read all
router.get('/ticketList', controller.listTickets);
// Read one
router.get('/ticket/:id', controller.getTicket);
// Create (with validation middleware)
router.post('/create', dataCheck, controller.createTicket);
// Update
router.put('/updateTicket/:id', controller.updateTicket);
// Delete
router.delete('/deleteTicket/:id', controller.deleteTicket);
// Resolve (patch)
router.patch('/resolve/:id/resolve', controller.resolveTicket);

module.exports = router;