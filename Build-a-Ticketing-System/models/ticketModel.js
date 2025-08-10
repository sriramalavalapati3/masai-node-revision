const { readDB, writeDB } = require('../utils/fileHandler');

async function getAllTickets() {
  const db = await readDB();
  return db.tickets || [];
}

async function getTicketById(id) {
  const tickets = await getAllTickets();
  return tickets.find(t => t.id === id) || null;
}

async function createTicket(payload) {
  const db = await readDB();
  const tickets = db.tickets || [];
  const maxId = tickets.reduce((m, t) => Math.max(m, t.id || 0), 0);
  const newTicket = {
    id: maxId + 1,
    title: payload.title,
    description: payload.description,
    priority: payload.priority,
    user: payload.user,
    status: payload.status || 'pending', // default
    createdAt: new Date().toISOString()
  };
  tickets.push(newTicket);
  db.tickets = tickets;
  await writeDB(db);
  return newTicket;
}

async function updateTicketById(id, updates) {
  const db = await readDB();
  const tickets = db.tickets || [];
  const idx = tickets.findIndex(t => t.id === id);
  if (idx === -1) return null;
  tickets[idx] = { ...tickets[idx], ...updates, id };
  db.tickets = tickets;
  await writeDB(db);
  return tickets[idx];
}

async function deleteTicketById(id) {
  const db = await readDB();
  const tickets = db.tickets || [];
  const idx = tickets.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tickets.splice(idx, 1);
  db.tickets = tickets;
  await writeDB(db);
  return true;
}

async function resolveTicketById(id) {
  const db = await readDB();
  const tickets = db.tickets || [];
  const idx = tickets.findIndex(t => t.id === id);
  if (idx === -1) return null;
  if (tickets[idx].status === 'resolved') return tickets[idx];
  tickets[idx].status = 'resolved';
  tickets[idx].resolvedAt = new Date().toISOString();
  db.tickets = tickets;
  await writeDB(db);
  return tickets[idx];
}

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicketById,
  deleteTicketById,
  resolveTicketById
};