'use strict';

import Constants from '../Constants'
import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native';

export default class PfTextInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
          placeholderTextColor={Constants.textColorDisabled}
          autoCapitalise='none'
          autoCorrect={false}
          {...this.props}
          style={[styles.input, this.props.style]} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: Constants.textColor,
    borderColor: Constants.textColor,
    fontSize: Constants.inputFontSize,
    height: 36,
    padding: 4,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 8
  }
});
