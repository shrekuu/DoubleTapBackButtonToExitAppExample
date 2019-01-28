import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../types'

export default handleActions({
  [INCREMENT] (state, action) {
    const count = state.count + 1
    return {
      ...state,
      count,
    }
  },
  [DECREMENT] (state, action) {
    let count = state.count - 1
    return {
      ...state,
      count,
    }
  },
}, {
  count: 0,
})

