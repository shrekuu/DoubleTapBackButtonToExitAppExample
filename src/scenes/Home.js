import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }

  render () {

    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text styles={styles.descriptionText}>Tap the back button on your android phone.</Text>
        </View>
        <View style={styles.actions}>
          <Button style={styles.btn} title='Go To Counter Page' onPress={() => {navigation.navigate('Counter')}}>Go To Counter Page</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  description: {
    alignItems: 'center',
  },
  descriptionText: {
    color: '#444',
    fontSize: 24
  },
  actions: {
    marginTop: 10,
  },
  btn: {
    flexGrow: 1,
  }
})

export default connect()(Home)
