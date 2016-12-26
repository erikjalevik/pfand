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
  TouchableWithoutFeedback,
  Keyboard
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
  isAdding: bool,
  keyboardPadding: number
}

class RequestCollectionScreen extends Component {

  props: Props
  state: State
  keyboardShownListener: Object
  keyboardHiddenListener: Object

  constructor(props) {
    super(props)
    this.state = {
      collection: {
        name: 'Pfandgeber',
        address: '',
        numBottles: 1,
        preferredTimes: ''
      },
      isAdding: false,
      keyboardPadding: 0
    }
  }

  componentWillMount() {
    this.keyboardShownListener = Keyboard.addListener('keyboardDidShow', (info) => {
      const keyboardHeight = info.endCoordinates.height
      this.setState({keyboardPadding: keyboardHeight})
    })
    this.keyboardHiddenListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({keyboardPadding: 0})
    })
  }

  componentWillUnmount() {
    this.keyboardShownListener.remove()
    this.keyboardHiddenListener.remove()
  }

  _updateCollection(key, value) {
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
      <ScrollView
        keyboardShouldPersistTaps={true} // tapping outside currently focused field does not dismiss
        style={styleSheet.container}
        contentContainerStyle={{paddingBottom: this.state.keyboardPadding}}>
        { /* Tried KeyboardAvoidingView here but couldn't get it to work with the ScrollView
             (neither could anyone on the Internet...). Instead using the manual keyboard padding
             offset on the content container above. */ }
        <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
          <View style={styleSheet.vbox}>
            <PfText>
              Find someone to collect your bottles and cans.
            </PfText>
            <PfTextInput
                placeholder='Your name'
                onChangeText={text => this._updateCollection('name', text)}
                value={this.state.collection.name} />
            <PfTextInput
                placeholder='Your address'
                onChangeText={text => this._updateCollection('address', text)}
                value={this.state.collection.address} />
            <PfTextInput
                placeholder='Number of bottles'
                onChangeText={text => this._updateCollection('numBottles', text)}
                value={this.state.collection.numBottles.toString()} />
            <PfTextInput
                placeholder='Preferred times'
                onChangeText={text => this._updateCollection('preferredTimes', text)}
                value={this.state.collection.preferredTimes} />
            {buttonOrSpinner}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  vbox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 60
  }
}
const styleSheet = StyleSheet.create(styles)

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
