import { all, fork } from 'redux-saga/effects'

import auth from '@redux/sagas/auth'
import todos from '@redux/sagas/todos'

function* rootSaga () {
  yield all([ fork( auth ), fork( todos ) ])
}

export default rootSaga