const moment = require('moment')

const TodoModel = require('@app/module/todo/todo')
const HttpStatus = require('http-status-codes')

class TodoController {
  async todos(req, res) {
    try {
      const { context: { user } } = req

      const todos = await TodoModel.find({
        userId: user._id,
        deletedAt: null
      }).sort({ createdAt: -1 })

      return res.status(HttpStatus.OK)
        .json({ todos })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async createTodo(req, res) {
    try {
      const { body: { title }, context: { user } } = req

      const todo = await new TodoModel({
        title,
        userId: user._id
      }).save()

      user.todos.push(todo)

      await user.save()

      return res.status(HttpStatus.OK)
        .json({ todo })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateTodo(req, res) {
    try {
      const {
        params: { _id },
        body: { title, completed },
        context: { user }
      } = req

      const todo = await TodoModel.findOne({
        _id,
        userId: user._id,
        deletedAt: null
      })

      if (!todo) {
        return res.status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Todo not found.' })
      }

      let data = { title }
      if (completed) {
        data = { completed: !todo.completed }
      }

      todo.set(data)

      await todo.save()

      return res.status(HttpStatus.OK)
        .json({ todo })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteTodo(req, res) {
    try {
      const { params: { _id }, context: { user } } = req

      const todo = await TodoModel.findOne({
        _id,
        userId: user._id,
        deletedAt: null
      })

      if (!todo) {
        return res.status(HttpStatus.BAD_REQUEST)
          .json({ error: 'Todo not found.' })
      }


      todo.set({ deletedAt: moment() })

      await todo.save()

      return res.status(HttpStatus.OK)
        .json({ todo })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this()
    }
    return this.instance
  }
}

module.exports = TodoController