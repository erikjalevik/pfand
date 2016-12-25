import store from './src/store/store'
import PfNavigator from './src/components/PfNavigator'
import constants from './src/constants'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'
import { Provider } from 'react-redux'

class Pfand extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.vbox}>
          <StatusBar barStyle='light-content' />
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
