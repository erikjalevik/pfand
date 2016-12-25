// @flow

import PfText from '../components/PfText'
import PfTextInput from '../components/PfTextInput'
import PfButton from '../components/PfButton'

import * as CollectionReducer from '../store/collectionReducer'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'

// Unsure why Keyboard.dismiss() doesn't work...
const dismissKeyboard = require('dismissKeyboard')

type Props = {
  onAddPressed: Function,
  push: Function,
  pop: Function
}

type State = {
  collection: CollectionReducer.Collection,
  isAdding: bool
}

class RequestCollectionScreen extends Component {

  props: Props
  state: State

  constructor(props) {
    super(props)
    this.state = {
      collection: {
        name: 'Pfandgeber',
        address: '',
        numBottles: 1,
        preferredTimes: ''
      },
      isAdding: false
    }
  }

  updateCollection(key, value) {
    // setState only merges top-level objects so we need to copy the existing collection properties and replace the key
    this.setState({ collection: { ...this.state.collection, [key]: value } })
  }

  render() {

    const buttonOrSpinner = this.state.isAdding ?
      <ActivityIndicator size='large'/> :
      (<PfButton title='Add'
        onPress={() => {
          dismissKeyboard()
          this.props.onAddPressed(this.state.collection)
          this.props.push()
        }} />)

    return (
      <ScrollView keyboardShouldPersistTaps={true}>
        { /* TODO: this doesn't cover the area below the button */ }
        <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
          <View style={styles.vbox}>
            <PfText>
              Find someone to collect your bottles and cans.
            </PfText>
            <PfTextInput
                placeholder='Your name'
                onChangeText={text => this.updateCollection('name', text)}
                value={this.state.collection.name} />
            <PfTextInput
                placeholder='Your address'
                onChangeText={text => this.updateCollection('address', text)}
                value={this.state.collection.address} />
            <PfTextInput
                placeholder='Number of bottles'
                onChangeText={text => this.updateCollection('numBottles', text)}
                value={this.state.collection.numBottles.toString()} />
            <PfTextInput
                placeholder='Preferred times'
                onChangeText={text => this.updateCollection('preferredTimes', text)}
                value={this.state.collection.preferredTimes} />
            {buttonOrSpinner}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  vbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 60,
    marginBottom: 250
  }
})

function mapStateToProps(store) {
  return {}
}

// TODO: should I be using bindActionCreators?
function mapDispatchToProps(dispatch) {
  return {
    onAddPressed: (coll) => {
      dispatch(CollectionReducer.addCollection(coll))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestCollectionScreen)
