'use strict';

import Constants from './Constants'
import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class PfButton extends Component {

  constructor(props) {
    super(props);
  }

  onAddPressed() {
  }

  render() {
    return (
      <TouchableHighlight
          underlayColor='white'
          onPress={this.onAddPressed.bind(this)}
          {...this.props}
          style={styles.button}>
        <Text style={styles.buttonText}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Constants.textColor,
    borderColor: Constants.textColor,
    justifyContent: 'center',
    height: 36,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 8
  },
  buttonText: {
    color: Constants.backgroundColor,
    fontSize: Constants.buttonFontSize,
    alignSelf: 'center'
  }
});
