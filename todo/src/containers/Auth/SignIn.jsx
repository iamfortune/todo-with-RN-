import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from '_demo-form'

import GSt from 'resources/styles/components'

import { InputErrorMsg } from 'components/parts'

import { authFetchRequest, runGlobalMsg } from '@redux/actions'
import { AuthService } from 'services'

const SignIn = () => {
  const dispatch = useDispatch()

  const [v, setV] = useState({})
  const [loader, setLoader] = useState(false)

  const listenSubmit = async (e, data, { valid }) => {
    try {
      e.preventDefault()

      if (!valid) return

      dispatch(runGlobalMsg())
      setLoader(true)

      const authService = new AuthService()

      const { error } = await authService.signIn({
        email: data.email,
        password: data.password
      })

      setLoader(false)

      if(error) {
        dispatch(runGlobalMsg({ message: error, status: 'error' }))
        return
      }

      dispatch(authFetchRequest())
    } catch (error) {
      setLoader(false)
      return Promise.reject(error)
    }
  }

  return (
    <>
      <GSt.Container>
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
                  name="email"
                  validator="required|isEmail"
                  placeholder="E-mail"
                />
                <InputErrorMsg errors={v.errors} name="email" />
              </div>
            </GSt.Field>
            <GSt.Field>
              <div>
                <Input
                  type="password"
                  name="password"
                  validator="required"
                  placeholder="Password"
                />
                <InputErrorMsg errors={v.errors} name="password" />
              </div>
            </GSt.Field>
            <GSt.Field>
              <div>
                <button type="submit" disabled={loader}>Sign in</button>
              </div>
            </GSt.Field>
          </Form>
        </GSt.FormWrapper>
      </GSt.Container>
    </>
  )
}

export default SignIn