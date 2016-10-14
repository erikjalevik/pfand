/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  StatusBar
} from 'react-native';

import RequestCollectionScreen from './RequestCollectionScreen';

class Pfand extends Component {
  render() {
    return (
        <View style={styles.vbox}>
          <StatusBar barStyle="light-content" />
          <RequestCollectionScreen />
        </View>
    );
  }
}

AppRegistry.registerComponent('pfand', () => Pfand);

const styles = StyleSheet.create({

  vbox: {
    backgroundColor: Constants.backgroundColor,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  }

});
