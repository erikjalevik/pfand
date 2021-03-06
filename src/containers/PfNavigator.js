import constants from '../constants'
import RequestCollectionScreen from '../containers/RequestCollectionScreen'
import ListCollectionsScreen from '../containers/ListCollectionsScreen'

import React, { Component } from 'react'
import { StyleSheet, Navigator, TouchableHighlight, Text } from 'react-native'

const routes = [
  {title: 'Add Collection', index: 0},
  {title: 'List Collections', index: 1}
]

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: constants.textColor
  },
  navText: {
    color: constants.backgroundColor,
    fontSize: constants.buttonFontSize,
    padding: 10
  }
})

const navBar = (
  <Navigator.NavigationBar
      routeMapper={{
        LeftButton: (route, navigator, index, navState) => {
          if (index !== 0) {
            return (
              <TouchableHighlight onPress={() => navigator.jumpBack()} displayName='BackButton'>
                <Text style={styles.navText}>Back</Text>
              </TouchableHighlight>
            )
          }
          else {
            return null
          }
        },
        RightButton: () => null,
        Title: (route) => {
          return <Text style={styles.navText} displayName='NavTitle'>{route.title}</Text>
        }
      }}
      style={styles.navBar}
      displayName='NavigationBar'
  />)

export default class PfNavigator extends Component {

  displayName = 'PfNavigator'

  constructor(props) {
    super(props)
  }

  _renderScene(route, navigator) {

    const pushHandler = () => {
      navigator.jumpForward()
    }

    const popHandler = () => {
      navigator.jumpBack()
    }

    if (route.index === 0) {
      return <RequestCollectionScreen push={pushHandler} pop={popHandler} />
    } else if (route.index === 1) {
      return <ListCollectionsScreen push={pushHandler} pop={popHandler} />
    } else {
      throw new Error('Invalid route index')
    }
  }

  render() {
    return (
      <Navigator
        initialRouteStack={routes}
        initialRoute={routes[0]}
        navigationBar={navBar}
        renderScene={this._renderScene} />
    )
  }
}
