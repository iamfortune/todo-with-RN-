import { RUN_GLOBAL_MSG } from '@redux/types'

const initialState = {
  show: false,
  message: '',
  status: ''
}

const globalMsg = (state = initialState, action) => {
  let payload, show
  switch (action.type) {
  case RUN_GLOBAL_MSG:
    payload = action.payload
    show = payload ? !!payload.status : false
    return {
      ...payload,
      show
    }
  default:
    return state
  }
}

export default globalMsg
