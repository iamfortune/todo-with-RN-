const UserValidator = require('@app/validator/userValidator').getInstance()
const TodoValidator = require('@app/validator/todoValidator').getInstance()

module.exports = {
  signInValidator: UserValidator.signIn,
  signUpValidator: UserValidator.signUp,
  verifyValidator: UserValidator.verify,
  resetPasswordValidator: UserValidator.resetPassword,
  newPasswordValidator: UserValidator.newPassword,
  changePasswordValidator: UserValidator.changePassword,
  updateUserValidator: UserValidator.updateUser,
  switchLocaleValidator: UserValidator.switchLocale,
  createTodoValidator: TodoValidator.createTodo,
  updateTodoValidator: TodoValidator.updateTodo,
  deleteTodoValidator: TodoValidator.deleteTodo
}
