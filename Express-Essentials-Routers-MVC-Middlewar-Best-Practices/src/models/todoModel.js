const { readDB, writeDB } = require('../utils/fileHandler');

async function getAllTodos() {
  const db = await readDB();
  return db.todos || [];
}

async function getTodoById(id) {
  const todos = await getAllTodos();
  return todos.find(t => t.id === id) || null;
}

async function createTodo(payload) {
  const db = await readDB();
  const todos = db.todos || [];
  const maxId = todos.reduce((m, t) => Math.max(m, t.id || 0), 0);
  const newTodo = {
    id: maxId + 1,
    title: payload.title || '',
    completed: typeof payload.completed === 'boolean' ? payload.completed : false
  };
  todos.push(newTodo);
  db.todos = todos;
  await writeDB(db);
  return newTodo;
}

async function updateTodoById(id, updates) {
  const db = await readDB();
  const todos = db.todos || [];
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return null;
  // Allow partial updates
  todos[idx] = { ...todos[idx], ...updates, id };
  db.todos = todos;
  await writeDB(db);
  return todos[idx];
}

async function deleteTodoById(id) {
  const db = await readDB();
  const todos = db.todos || [];
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return false;
  todos.splice(idx, 1);
  db.todos = todos;
  await writeDB(db);
  return true;
}

async function searchTodosByTitle(query) {
  if (!query) return [];
  const todos = await getAllTodos();
  const q = String(query).trim().toLowerCase();
  // split by space to support partial-term matching, but primary requirement is substring match
  return todos.filter(t => (t.title || '').toLowerCase().includes(q));
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
  searchTodosByTitle
};