const validator = require('validator')
const HttpStatus = require('http-status-codes')

class TodoValidator {
  async createTodo(req, res, next) {
    const { body: { title } } = req

    if (!title) {
      return res.status(HttpStatus.BAD_REQUEST)
        .json({ error: 'Error: title' })
    }

    return next()
  }

  async updateTodo(req, res, next) {
    const { params: { _id }, body: { title, completed } } = req

    if (!_id) {
      return res.status(HttpStatus.BAD_REQUEST)
        .json({ error: 'Error: _id' })
    }

    if (!completed && !title) {
      return res.status(HttpStatus.BAD_REQUEST)
        .json({ error: 'Error: title' })
    }

    return next()
  }

  async deleteTodo(req, res, next) {
    const { params: { _id } } = req

    if (!_id) {
      return res.status(HttpStatus.BAD_REQUEST)
        .json({ error: 'Error: _id' })
    }

    return next()
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this()
    }
    return this.instance
  }
}

module.exports = TodoValidator
