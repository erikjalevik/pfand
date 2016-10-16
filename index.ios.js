/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import store from './js/store/store';
import RequestCollectionScreen from './js/containers/RequestCollectionScreen';
import ListCollectionsScreen from './js/containers/ListCollectionsScreen';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  StatusBar,
  Text,
  TouchableHighlight
} from 'react-native';
import { Provider } from 'react-redux';

const routes = [
  {title: 'Add Collection', index: 0},
  {title: 'List Collections', index: 1},
];

class Pfand extends Component {

  renderScene(route, navigator) {
    const pushHandler = () => {
      const nextIndex = route.index + 1;
      navigator.push(routes[nextIndex]);
    };

    if (route.index == 0) {
      return <RequestCollectionScreen push={pushHandler} />;
    } else if (route.index == 1) {
      return <ListCollectionsScreen push={pushHandler} />;
    }
  }

  navBar() {
    return (
      <Navigator.NavigationBar
        routeMapper={{
          LeftButton: (route, navigator, index, navState) => {
            if (index != 0) {
              return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                  <Text>Back</Text>
                </TouchableHighlight>
              );
            }
            else return null;
          },
          RightButton: (route, navigator, index, navState) => {
            return null;
          },
          Title: (route, navigator, index, navState) => {
            return (<Text>{route.title}</Text>);
          }
        }}
        style={{backgroundColor: 'lightgray'}}
      />);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.vbox}>
          <StatusBar barStyle="light-content" />
          <Navigator
              initialRouteStack={routes}
              initialRoute={routes[0]}
              navigationBar={this.navBar()}
              renderScene={this.renderScene.bind(this)} />
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
