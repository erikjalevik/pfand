'use strict';

import constants from '../constants'
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native';

export default class PfText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text {...this.props} style={[styles.body, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    color: constants.textColor,
    fontSize: constants.bodyFontSize,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});
