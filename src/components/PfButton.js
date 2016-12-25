import constants from '../constants'
import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'

export default class PfButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableHighlight
          underlayColor='white'
          {...this.props}
          style={[styles.button, this.props.style]}>
        <Text style={styles.buttonText}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: constants.textColor,
    borderColor: constants.textColor,
    justifyContent: 'center',
    height: 36,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 8
  },
  buttonText: {
    color: constants.backgroundColor,
    fontSize: constants.buttonFontSize,
    alignSelf: 'center'
  }
})
