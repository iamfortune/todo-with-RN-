import React, {useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import St from 'resources/styles/components/header'

import { authFetchRequest, runGlobalMsg } from '@redux/actions'
import { AuthContext } from 'contexts'
import { AuthService } from 'services'

const Header = () => {
  const dispatch = useDispatch()

  const auth = useContext(AuthContext)

  const [loader, setLoader] = useState(false)

  const listenLogoutBtn = async () => {
    try {
      setLoader(true)

      const authService = new AuthService()

      const { error } = await authService.logout()

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
    <St.Header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          {!auth.user?
            <>
              <li><NavLink to="/auth/sign-in">Sign in</NavLink></li>
              <li><NavLink to="/auth/sign-up">Sign up</NavLink></li>
            </> :
            <>
              <li><NavLink to="/todos">Todos</NavLink></li>
              <li><button type="button" disabled={loader} onClick={listenLogoutBtn}>Logout</button></li>
            </>
          }
        </ul>
      </nav>
    </St.Header>
  )
}

export default Header
