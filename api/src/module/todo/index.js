const TodoController = require('@app/module/todo/todoController').getInstance()

module.exports = {
  todos: TodoController.todos,
  createTodo: TodoController.createTodo,
  updateTodo: TodoController.updateTodo,
  deleteTodo: TodoController.deleteTodo,
  switchStateTodo: TodoController.switchStateTodo
}
