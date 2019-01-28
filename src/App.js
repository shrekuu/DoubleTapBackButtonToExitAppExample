import React, { ErrorBoundary } from 'react'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import AppNavigator from './AppNavigator'
import * as reducers from './store/reducers'
import ReduxNavigation from './ReduxNavigation'

// combine reducers
const navReducer = createNavigationReducer(AppNavigator)
const rootReducers = combineReducers({
  nav: navReducer,

  // these are your reducers for your components
  ...reducers,
})

// navigation redux middleware
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

// reduxify navigator
export const App = reduxifyNavigator(AppNavigator, 'root')

// create store
const store = createStore(
  rootReducers,
  applyMiddleware(middleware),
)

// provide store and export app root component
export default class Root extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <ReduxNavigation/>
      </Provider>
    )
  }
}

// todo: disable yellow box when u are extremely angry
console.disableYellowBox = true
