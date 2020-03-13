import React from 'react'
import { useSelector } from 'react-redux'

import GSt from 'resources/styles/components'

import { CreateTodo, TodoList } from 'components/Todo'

const Todo = () => {
  const todos = useSelector(state => state.todos)

  return (
    <GSt.Container>
      <CreateTodo />
      <TodoList todos={todos} />
    </GSt.Container>
  )
}

export default Todo