'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import Constants from './Constants'

export default class RequestCollectionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Pfandgeber",
      isAdding: false
    }
  }

  onAddPressed() {
  }

  render() {

    const buttonOrSpinner = this.state.isAdding ?
      ( <ActivityIndicator size='large'/> ) :
      ( <TouchableHighlight style={styles.button}
            underlayColor='white'
            onPress={this.onAddPressed.bind(this)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight> );

    return (
      <ScrollView>
        <View style={styles.vbox}>
          <Text style={styles.body}>
            Find someone to collect your bottles and cans.
          </Text>
          <TextInput
              style={styles.input}
              placeholder='Your name'
              placeholderTextColor={Constants.textColorDisabled}
              autoCapitalise='none'
              autoCorrect={false} />
          <TextInput
              style={styles.input}
              placeholder='Your address'
              placeholderTextColor={Constants.textColorDisabled}
              autoCapitalise='none'
              autoCorrect={false} />
          <TextInput
              style={styles.input}
              placeholder='Number of bottles'
              placeholderTextColor={Constants.textColorDisabled}
              autoCapitalise='none'
              autoCorrect={false} />
          {buttonOrSpinner}
        </View>
      </ScrollView>
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
  },
  vbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 20
  },
  input: {
    color: Constants.textColor,
    borderColor: Constants.textColor,
    fontSize: Constants.inputFontSize,
    height: 36,
    padding: 4,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
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
