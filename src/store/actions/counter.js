import { createAction } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../types'

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
