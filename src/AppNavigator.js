import { createStackNavigator } from 'react-navigation'
import Home from './scenes/Home'
import Counter from './scenes/Counter'

const AppNavigator = createStackNavigator(
  {
    Home,
    Counter,
  },
  {
    initialRouteName: 'Home',
  },
)

export default AppNavigator
