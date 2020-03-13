const { isAuth } = require('@app/middleware')
const {
  createTodoValidator,
  updateTodoValidator,
  deleteTodoValidator
} = require('@app/validator')
const { todo } = require('@app/module')

module.exports = function (router) {
  router.get('/todos', isAuth, todo.todos)
  router.post('/todo/create', isAuth, createTodoValidator, todo.createTodo)
  router.post('/todo/:_id/update', isAuth, updateTodoValidator, todo.updateTodo)
  router.post('/todo/:_id/delete', isAuth, deleteTodoValidator, todo.deleteTodo)
}