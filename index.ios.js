/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import store from './js/store/store';
import RequestCollectionScreen from './js/containers/RequestCollectionScreen';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';

class Pfand extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.vbox}>
          <StatusBar barStyle="light-content" />
          <RequestCollectionScreen/>
        </View>
      </Provider>
    );
  }
}

store.subscribe(() => {
  console.log("Store changed: ", store.getState());
})

AppRegistry.registerComponent('pfand', () => Pfand);

const styles = StyleSheet.create({
  vbox: {
    backgroundColor: Constants.backgroundColor,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  }
});
