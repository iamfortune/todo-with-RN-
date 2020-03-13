import { cFetch } from 'tools'
import { authUtils } from 'utils'

class AuthService {
  async user () {
    try {
      const accessToken = authUtils.getToken()

      if (!accessToken) {
        return { user: undefined }
      }

      const result = await cFetch('user')

      const { user, error } = await result.json()

      return { user, error }
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async signIn ({ email, password }) {
    try {
      const result = await cFetch('sign-in', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })

      const { accessToken, error } = await result.json()

      if(error) {
        return { error }
      }

      authUtils.setToken(accessToken)

      return {}
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async signUp ({ email, password }) {
    try {
      const result = await cFetch('sign-up', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })

      const { accessToken, error } = await result.json()

      if(error) {
        return { error }
      }

      authUtils.setToken(accessToken)

      return {}
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async logout () {
    try {
      const result = await cFetch('logout', {
        method: 'POST'
      })

      const { error } = await result.json()

      if(error) {
        return { error }
      }

      authUtils.removeToken('accessToken')

      return {}
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default AuthService