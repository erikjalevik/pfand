'use strict';

import PfText from './PfText'
import PfTextInput from './PfTextInput'
import PfButton from './PfButton'
import Constants from './Constants'

import { addCollection } from './collectionReducer'

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
      collection: {
        name: "Pfandgeber",
        address: "",
        numBottles: ""
      },
      isAdding: false
    }
  }

  onAddPressed() {
    const action = addCollection(this.state.collection);
    this.props.store.dispatch(action);
  }

  updateCollection(key, value) {
    var c = Object.assign({}, this.state.collection);
    c[key] = value;
    this.setState({collection: c});
  }

  render() {

    const buttonOrSpinner = this.state.isAdding ?
      ( <ActivityIndicator size='large'/> ) :
      ( <PfButton title="Add" onPress={this.onAddPressed.bind(this)} /> );

    return (
      <ScrollView>
        <View style={styles.vbox}>
          <PfText>
            Find someone to collect your bottles and cans.
          </PfText>
          <PfTextInput
              placeholder='Your name'
              onChangeText={text => this.updateCollection("name", text)} />
          <PfTextInput
              placeholder='Your address'
              onChangeText={text => this.updateCollection("address", text)} />
          <PfTextInput
              placeholder='Number of bottles'
              onChangeText={text => this.updateCollection("numBottles", text)} />
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
