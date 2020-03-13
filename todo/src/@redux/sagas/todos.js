import { call, put, take, fork } from 'redux-saga/effects'

import { todosFetchSucceeded, todosFetchFailed } from '@redux/actions'

import { TodoService } from 'services'
import { AUTH_FETCH_SUCCEEDED } from '@redux/types'

function* fetchTodos () {
  try {
    yield take(AUTH_FETCH_SUCCEEDED)

    const todoService = new TodoService()

    const data = yield call(todoService.todos)

    yield put(todosFetchSucceeded(data))
  } catch (error) {
    yield put(todosFetchFailed(error))
  }
}

function* todos () {
  yield fork(fetchTodos)
}

export default todos