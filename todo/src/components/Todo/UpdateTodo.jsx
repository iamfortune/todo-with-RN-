import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Form, Input } from '_demo-form'

import GSt from 'resources/styles/components'

import { InputErrorMsg } from 'components/parts'

import { updateTodo, runGlobalMsg } from '@redux/actions'
import { TodoService } from 'services'

const UpdateTodo = ({ todo, finishUpdatable }) => {
  const dispatch = useDispatch()

  const [v, setV] = useState({})

  const listenSubmit = async (e, data, { valid }) => {
    try {
      e.preventDefault()

      if (!valid) return
      dispatch(runGlobalMsg())

      const todoService = new TodoService()

      const { todo, error } = await todoService.updateTodo({
        _id: data._id,
        title: data.title
      })

      if(error) {
        dispatch(runGlobalMsg({ message: error, status: 'error' }))
        return
      }

      dispatch(updateTodo(todo))
      dispatch(runGlobalMsg({ message: 'Successfully updated', status: 'success' }))
      finishUpdatable(false)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return(
    <Form
      autoComplete="off"
      onSubmit={listenSubmit}
      setValidator={validator => setV(validator)}
    >
      <GSt.Field>
        <div>
          <Input
            type="hidden"
            name="_id"
            validator="required"
            value={todo._id}
          />
          <Input
            type="text"
            name="title"
            validator="required"
            placeholder="Title"
            value={todo.title}
          />
          <InputErrorMsg errors={v.errors} name="title" />
        </div>
      </GSt.Field>
    </Form>)
}

UpdateTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  finishUpdatable: PropTypes.func.isRequired
}

export default UpdateTodo