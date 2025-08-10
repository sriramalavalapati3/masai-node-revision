const ticketModel = require('../models/ticketModel');

async function listTickets(req, res, next) {
  try {
    const tickets = await ticketModel.getAllTickets();
    res.json(tickets);
  } catch (err) {
    next(err);
  }
}

async function getTicket(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const ticket = await ticketModel.getTicketById(id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    next(err);
  }
}

async function createTicket(req, res, next) {
  try {
    // validation middleware ensures required fields
    const { title, description, priority, user } = req.body;
    const created = await ticketModel.createTicket({ title, description, priority, user });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function updateTicket(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const updates = {};
    if (req.body.title !== undefined) updates.title = req.body.title;
    if (req.body.description !== undefined) updates.description = req.body.description;
    if (req.body.priority !== undefined) updates.priority = req.body.priority;
    if (Object.keys(updates).length === 0) return res.status(400).json({ error: 'No valid fields to update' });
    const updated = await ticketModel.updateTicketById(id, updates);
    if (!updated) return res.status(404).json({ error: 'Ticket not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteTicket(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const ok = await ticketModel.deleteTicketById(id);
    if (!ok) return res.status(404).json({ error: 'Ticket not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function resolveTicket(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const resolved = await ticketModel.resolveTicketById(id);
    if (!resolved) return res.status(404).json({ error: 'Ticket not found' });
    res.json(resolved);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
};