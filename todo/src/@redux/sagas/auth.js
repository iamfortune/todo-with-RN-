import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { authFetchSucceeded, authFetchFailed } from '@redux/actions'

import { AuthService } from 'services'
import { AUTH_FETCH_REQUESTED } from '@redux/types'

function* fetchAuth () {
  try {
    const authService = new AuthService()

    const data = yield call(authService.user)

    yield put(authFetchSucceeded(data))
  } catch (error) {
    yield put(authFetchFailed(error))
  }
}

function* auth () {
  yield fork(fetchAuth)
  yield takeLatest(AUTH_FETCH_REQUESTED, fetchAuth)
}

export default auth