import { authUtils } from 'utils'

const cFetch = (url, options = {}) => {
  const accessToken = authUtils.getToken()

  return fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
    method: 'GET',
    mode: 'cors',
    ...options,
    headers: {
      'Access-Control-Allow-Origin': process.env.REACT_APP_APP_URL,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      ...options.headers
    }
  })
}

export default cFetch