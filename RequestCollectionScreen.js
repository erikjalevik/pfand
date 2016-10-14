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

const TEXT_COLOR = '#a0f0f0';
const BACKGROUND_COLOR = '#001020';

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
              placeholderTextColor={TEXT_COLOR}
              autoCapitalise='none'
              autoCorrect={false} />
          <TextInput
              style={styles.input}
              placeholder='Your address'
              placeholderTextColor={TEXT_COLOR}
              autoCapitalise='none'
              autoCorrect={false} />
          <TextInput
              style={styles.input}
              placeholder='Number of bottles'
              placeholderTextColor={TEXT_COLOR}
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
    fontSize: 22,
    textAlign: 'center',
    color: TEXT_COLOR,
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
    height: 36,
    padding: 4,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: TEXT_COLOR,
    borderRadius: 8,
    color: TEXT_COLOR,

  },
  button: {
    height: 36,
    backgroundColor: TEXT_COLOR,
    borderColor: TEXT_COLOR,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    color: BACKGROUND_COLOR,
    alignSelf: 'center',
  }
});
