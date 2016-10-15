/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import store from './store';
import RequestCollectionScreen from './RequestCollectionScreen';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  StatusBar
} from 'react-native';

class Pfand extends Component {
  render() {
    return (
      <View style={styles.vbox}>
        <StatusBar barStyle="light-content" />
        <RequestCollectionScreen store={store}/>
      </View>
    );
  }
}

store.subscribe(() => {
  console.log("Store changed: ", store.getState());
})

store.dispatch({type: "TEST_ACTION"});

AppRegistry.registerComponent('pfand', () => Pfand);

const styles = StyleSheet.create({
  vbox: {
    backgroundColor: Constants.backgroundColor,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  }
});
