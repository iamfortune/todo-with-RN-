import {
  AUTH_FETCH_SUCCEEDED,
  AUTH_FETCH_FAILED
} from '@redux/types'

const initialState = {
  user: undefined,
  error: undefined,
  loading: true
}

const auth = (state = initialState, action) => {
  switch (action.type) {
  case AUTH_FETCH_SUCCEEDED:
    return {
      ...state,
      ...action.payload,
      loading: false
    }
  case AUTH_FETCH_FAILED:
    return {
      ...state,
      ...action.payload,
      loading: false
    }
  default:
    return state
  }
}

export default auth
