import React  from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

// note here: imported App component
import { App } from './App'

class ReduxNavigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      backButtonLastPressTime: 0,
    }
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { nav, dispatch } = this.props

    // on the root page
    if (nav.index === 0) {
      const now = new Date().getTime()

      // pressed the back button within 2000ms twice
      // ToastAndroid.SHORT === 2000
      if (now - this.state.backButtonLastPressTime < 2000) {
        return false
      }

      ToastAndroid.showWithGravityAndOffset(
        'Press Again to Exit App',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        100,
      )
      this.state.backButtonLastPressTime = now
      return true
    }

    // not on the root page, nav back
    dispatch(NavigationActions.back())
    return true
  }

  render () {
    const { nav, dispatch } = this.props

    return <App state={nav} dispatch={dispatch}/>
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(ReduxNavigation)
