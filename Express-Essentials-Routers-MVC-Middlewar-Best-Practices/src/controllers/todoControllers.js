const todoModel = require('../models/todoModel');

async function listTodos(req, res, next) {
  try {
    const todos = await todoModel.getAllTodos();
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

async function getTodo(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const todo = await todoModel.getTodoById(id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

async function createTodo(req, res, next) {
  try {
    const { title, completed } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title is required and must be a string' });
    }
    const created = await todoModel.createTodo({ title, completed });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function updateTodo(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const updates = {};
    if (req.body.title !== undefined) updates.title = req.body.title;
    if (req.body.completed !== undefined) updates.completed = req.body.completed;
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }
    const updated = await todoModel.updateTodoById(id, updates);
    if (!updated) return res.status(404).json({ error: 'Todo not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteTodo(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
    const ok = await todoModel.deleteTodoById(id);
    if (!ok) return res.status(404).json({ error: 'Todo not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function searchTodos(req, res, next) {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: 'Query parameter q is required' });
    const results = await todoModel.searchTodosByTitle(q);
    res.json(results);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  searchTodos
};