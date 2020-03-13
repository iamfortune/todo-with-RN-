import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import St from 'resources/styles/components/todo'
import Svg from 'resources/svg-components'

import { UpdateTodo } from 'components/Todo'

import { updateTodo, deleteTodo, runGlobalMsg } from '@redux/actions'
import { TodoService } from 'services'

const Todo = ({ todos }) => {
  const dispatch = useDispatch()

  const [updatable, setUpdatable] = useState(false)
  const [loader, setLoader] = useState(false)

  const updatableTodo = todo => todo === updatable

  const listenUpdateBtn = todo => () => setUpdatable(todo)

  const finishUpdatable = () => setUpdatable(false)

  const listenCompleteBtn = data => async ()=> {
    try {
      dispatch(runGlobalMsg())
      setLoader(true)

      const todoService = new TodoService()

      const { todo, error } = await todoService.updateTodo({
        _id: data._id,
        completed: true
      })

      setLoader(false)

      if(error) {
        dispatch(runGlobalMsg({ message: error, status: 'error' }))
        return
      }

      dispatch(updateTodo(todo))
      dispatch(runGlobalMsg({ message: 'Successfully completed', status: 'success' }))
    } catch (error) {
      setLoader(false)
      return Promise.reject(error)
    }
  }

  const listenDeleteBtn = data => async ()=> {
    try {
      dispatch(runGlobalMsg())
      setLoader(true)

      const todoService = new TodoService()

      const { todo, error } = await todoService.deleteTodo({
        _id: data._id
      })

      setLoader(false)

      if(error) {
        alert(error)
        return
      }

      dispatch(deleteTodo(todo))
      dispatch(runGlobalMsg({ message: 'Successfully deleted', status: 'success' }))
    } catch (error) {
      setLoader(false)
      return Promise.reject(error)
    }
  }

  if (todos.loading) return <h1>loading...</h1>

  return (
    <St.TodoContainer>
      <h1>Todos</h1>
      <St.TodoListContainer>
        {!todos.data.length && <p>No record</p>}
        {!!todos.data.length &&
        <ul>
          {todos.data.map(todo =>
            <li key={todo._id}>
              { updatableTodo(todo) ?
                <UpdateTodo todo={todo} finishUpdatable={finishUpdatable} />:
                <p>{todo.title}</p>
              }
              <span>
                <button type="button" onClick={listenDeleteBtn(todo)} disabled={loader}>
                  <Svg.DeleteIcon />
                </button>
                <button type="button" onClick={listenUpdateBtn(todo)} disabled={loader}>
                  <Svg.UpdateIcon className={updatableTodo(todo) ? 'updatable': ''} />
                </button>
                <button type="button" onClick={listenCompleteBtn(todo)} disabled={loader}>
                  <Svg.CheckIcon className={todo.completed ? 'completed' : ''} />
                </button>
              </span>
            </li>
          )}
        </ul>
        }
      </St.TodoListContainer>
    </St.TodoContainer>
  )
}

Todo.propTypes = {
  todos: PropTypes.object.isRequired
}

export default Todo