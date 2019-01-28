import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { increment, decrement } from '../store/actions'

class Counter extends React.Component {

  static navigationOptions = {
    title: 'Counter',
  }

  render () {

    const { count, increment, decrement } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.count}>
          <Text style={styles.countText}>{count}</Text>
        </View>

        <View style={styles.actions}>
          <Button style={styles.btn} title='Increment' onPress={() => increment()}>Increment</Button>
          <Button style={styles.btn} title='Decrement' onPress={() => decrement()}>Decrement</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  count: {
    alignItems: 'center',
  },
  countText: {
    color: '#444',
    fontSize: 48
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    flexGrow: 1,
  }
})

const mapStateToProps = (state) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
