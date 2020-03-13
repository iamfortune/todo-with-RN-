import { combineReducers } from 'redux'

import auth from '@redux/reducers/auth'
import todos from '@redux/reducers/todos'
import globalMsg from '@redux/reducers/globalMsg'

export default combineReducers({
  auth,
  todos,
  globalMsg
})
