'use strict';

import Constants from '../Constants'
import RequestCollectionScreen from '../containers/RequestCollectionScreen';
import ListCollectionsScreen from '../containers/ListCollectionsScreen';

import React, { Component } from 'react'
import { StyleSheet, Navigator, TouchableHighlight, Text } from 'react-native';

const routes = [
  {title: 'Add Collection', index: 0},
  {title: 'List Collections', index: 1},
];

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Constants.textColor,
  },
  navText: {
    color: Constants.backgroundColor,
    fontSize: Constants.buttonFontSize,
    padding: 10
  }
});

//class PfNavigationBar extends Component {
//  render() {
//    return (
const navBar =
      <Navigator.NavigationBar
          routeMapper={{
            LeftButton: (route, navigator, index, navState) => {
              if (index != 0) {
                return (
                  <TouchableHighlight onPress={() => navigator.jumpBack()}>
                    <Text style={styles.navText}>Back</Text>
                  </TouchableHighlight>
                );
              }
              else return null;
            },
            RightButton: (route, navigator, index, navState) => {
              return null;
            },
            Title: (route, navigator, index, navState) => {
              return (<Text style={styles.navText}>{route.title}</Text>);
            }
          }}
          style={styles.navBar}
      />
//    );
//  }
//}

export default class PfNavigator extends Component {

  constructor(props) {
    super(props);
  }

  _renderScene(route, navigator) {

    const pushHandler = () => {
      const nextIndex = route.index + 1;
      navigator.jumpForward();
    };

    if (route.index == 0) {
      return <RequestCollectionScreen push={pushHandler} />;
    } else if (route.index == 1) {
      return <ListCollectionsScreen push={pushHandler} />;
    }
  }

  render() {
    return (
      <Navigator
          initialRouteStack={routes}
          initialRoute={routes[0]}
          navigationBar={navBar}
          renderScene={this._renderScene} />
    );
  }
}
