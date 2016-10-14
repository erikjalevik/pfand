'use strict';

import PfText from './PfText'
import PfTextInput from './PfTextInput'
import PfButton from './PfButton'
import Constants from './Constants'

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

export default class RequestCollectionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Pfandgeber",
      address: "",
      numBottles: "",
      isAdding: false
    }
  }

  render() {

    const buttonOrSpinner = this.state.isAdding ?
      ( <ActivityIndicator size='large'/> ) :
      ( <PfButton title="Add"/> );

    return (
      <ScrollView>
        <View style={styles.vbox}>
          <PfText>
            Find someone to collect your bottles and cans.
          </PfText>
          <PfTextInput
              placeholder='Your name'
              onChangeText={text => this.setState({name: text})} />
          <PfTextInput
              placeholder='Your address'
              onChangeText={text => this.setState({address: text})} />
          <PfTextInput
              placeholder='Number of bottles'
              onChangeText={text => this.setState({numBottles: text})} />
          {buttonOrSpinner}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  vbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 20
  },
});
