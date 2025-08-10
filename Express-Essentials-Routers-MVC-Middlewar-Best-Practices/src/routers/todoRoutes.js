const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoControllers');

router.get('/list', controller.listTodos);
router.get('/search', controller.searchTodos);
router.get('/todo/:id', controller.getTodo);
router.post('/create', controller.createTodo);
router.put('/update/:id', controller.updateTodo);
router.delete('/delete/:id', controller.deleteTodo);

module.exports = router;