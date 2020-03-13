import {
  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED,

  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '@redux/types'

const initialState = {
  data: [],
  error: undefined,
  loading: true
}

const todos = (state = initialState, action) => {
  switch (action.type) {
  case TODOS_FETCH_SUCCEEDED:
    return {
      ...state,
      ...action.payload,
      loading: false
    }
  case TODOS_FETCH_FAILED:
    return {
      ...state,
      ...action.payload,
      loading: false
    }

  case CREATE_TODO:
    return {
      ...state,
      data: [action.payload, ...state.data],
      loading: false
    }
  case UPDATE_TODO:
    return {
      ...state,
      data: state.data.map(data => {
        if(data._id === action.payload._id) {
          return {
            ...data,
            ...action.payload
          }
        }
        return data
      }),
      loading: false
    }
  case DELETE_TODO:
    return {
      ...state,
      data: state.data.filter(data => data._id === action.payload._id ? false : true),
      loading: false
    }
  default:
    return state
  }
}

export default todos
