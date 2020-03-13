import { cFetch } from 'tools'

class TodoService {
  async todos () {
    try {
      const result = await cFetch('todos')

      const { todos: data, error } = await result.json()

      return { data, error }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async createTodo ({ title }) {
    try {
      const result = await cFetch('todo/create', {
        method: 'POST',
        body: JSON.stringify({ title })
      })

      const { todo, error } = await result.json()

      if(error) {
        return { error }
      }

      return { todo }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateTodo ({ _id, title, completed = false }) {
    try {
      const result = await cFetch(`todo/${_id}/update`, {
        method: 'POST',
        body: JSON.stringify({ title, completed })
      })

      const { todo, error } = await result.json()

      if(error) {
        return { error }
      }

      return { todo }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteTodo ({ _id }) {
    try {
      const result = await cFetch(`todo/${_id}/delete`, {
        method: 'POST'
      })

      const { todo, error } = await result.json()

      if(error) {
        return { error }
      }

      return { todo }
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default TodoService