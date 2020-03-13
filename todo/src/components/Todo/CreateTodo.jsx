import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from '_demo-form'

import GSt from 'resources/styles/components'

import { InputErrorMsg } from 'components/parts'

import { createTodo, runGlobalMsg } from '@redux/actions'
import { TodoService } from 'services'

const CreateTodo = () => {
  const dispatch = useDispatch()

  const [v, setV] = useState({})
  const [loader, setLoader] = useState(false)

  const listenSubmit = async (e, data, { valid }, resetFormState) => {
    try {
      e.preventDefault()

      if (!valid) return
      dispatch(runGlobalMsg())
      setLoader(true)

      const todoService = new TodoService()

      const { todo, error } = await todoService.createTodo({
        title: data.title
      })

      setLoader(false)

      if(error) {
        dispatch(runGlobalMsg({ message: error, status: 'error' }))
        return
      }

      resetFormState()
      dispatch(createTodo(todo))
      dispatch(runGlobalMsg({ message: 'Successfully added', status: 'success' }))
    } catch (error) {
      setLoader(false)
      return Promise.reject(error)
    }
  }

  return (
    <GSt.FormWrapper>
      <Form
        autoComplete="off"
        onSubmit={listenSubmit}
        setValidator={validator => setV(validator)}
      >
        <GSt.Field>
          <div>
            <Input
              type="text"
              name="title"
              validator="required"
              placeholder="Title"
            />
            <InputErrorMsg errors={v.errors} name="title" />
          </div>
        </GSt.Field>
        <GSt.Field>
          <div>
            <button type="submit" disabled={loader}>Create todo</button>
          </div>
        </GSt.Field>
      </Form>
    </GSt.FormWrapper>
  )
}

export default CreateTodo