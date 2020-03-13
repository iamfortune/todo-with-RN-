const mongoose = require('@app/mongoose')

const { Schema } = mongoose

const todoSchema = new Schema(
  {
    title: String,
    completed: {
      type: Boolean,
      default: false
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    deletedAt: Date
  },
  { timestamps: true }
)

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
