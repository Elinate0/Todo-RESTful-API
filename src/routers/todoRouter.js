const router = require('express').Router();
const todoController = require('../controllers/todoController.js')

router.post('/todo', todoController.todoAdd)
router.get('/todo', todoController.todoGetAll)
router.delete('/todo/:id', todoController.todoDelete)
router.put('/todo/:id', todoController.todoUpdate)
router.get('/todo/:id', todoController.todoGet)

module.exports = router