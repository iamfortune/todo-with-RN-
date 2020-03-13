import {
  AUTH_FETCH_REQUESTED,
  AUTH_FETCH_SUCCEEDED,
  AUTH_FETCH_FAILED,

  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED,

  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,

  RUN_GLOBAL_MSG
} from '@redux/types'

const authFetchRequest = () => ({
  type: AUTH_FETCH_REQUESTED
})

const authFetchSucceeded = content => ({
  type: AUTH_FETCH_SUCCEEDED,
  payload: content
})

const authFetchFailed = content => ({
  type: AUTH_FETCH_FAILED,
  payload: content
})

const todosFetchSucceeded = content => ({
  type: TODOS_FETCH_SUCCEEDED,
  payload: content
})

const todosFetchFailed = content => ({
  type: TODOS_FETCH_FAILED,
  payload: content
})

const createTodo = content => ({
  type: CREATE_TODO,
  payload: content
})

const updateTodo = content => ({
  type: UPDATE_TODO,
  payload: content
})

const deleteTodo = content => ({
  type: DELETE_TODO,
  payload: content
})

const runGlobalMsg = content => ({
  type: RUN_GLOBAL_MSG,
  payload: content
})

export {
  authFetchRequest,
  authFetchSucceeded,
  authFetchFailed,
  todosFetchSucceeded,
  todosFetchFailed,
  createTodo,
  updateTodo,
  deleteTodo,
  runGlobalMsg
}