const setToken = accessToken => localStorage.setItem('accessToken', accessToken)
const getToken = () => localStorage.getItem('accessToken')
const removeToken = () => localStorage.removeItem('accessToken')

export default {
  setToken,
  getToken,
  removeToken
}