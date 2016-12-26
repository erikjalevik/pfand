import store from './src/store/store'
import PfNavigator from './src/containers/PfNavigator'
import constants from './src/constants'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'
import { Provider } from 'react-redux'

class Pfand extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.vbox}>
          <PfNavigator />
        </View>
      </Provider>
    )
  }
}

store.subscribe(() => {
  console.log('Store changed: ', store.getState())
})

AppRegistry.registerComponent('pfand', () => Pfand)

const styles = StyleSheet.create({
  vbox: {
    backgroundColor: constants.backgroundColor,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  }
})
