'use strict';

import Constants from '../Constants'
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native';

export default class PfText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text {...this.props} style={styles.body}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    color: Constants.textColor,
    fontSize: Constants.bodyFontSize,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});
