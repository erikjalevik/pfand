import PfText from '../components/PfText'
import PfTextInput from '../components/PfTextInput'
import PfButton from '../components/PfButton'

import * as collectionActions from '../store/collectionReducer'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'

// Unsure why Keybard.dismiss() doesn't work...
const dismissKeyboard = require('dismissKeyboard')

class RequestCollectionScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collection: {
        name: 'Pfandgeber',
        address: '',
        numBottles: '',
        preferredTimes: ''
      },
      isAdding: false
    }
  }

  updateCollection(key, value) {
    // TODO: replace with value binding?
    var c = Object.assign({}, this.state.collection)
    c[key] = value
    this.setState({collection: c})
  }

  render() {

    const buttonOrSpinner = this.state.isAdding ?
      <ActivityIndicator size='large'/> :
      (<PfButton title='Add'
            onPress={() => {
              dismissKeyboard()
              this.props.onAddPressed(this.state.collection)
              this.props.push()
            }} />
      )

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
                onChangeText={text => this.updateCollection('name', text)} />
            <PfTextInput
                placeholder='Your address'
                onChangeText={text => this.updateCollection('address', text)} />
            <PfTextInput
                placeholder='Number of bottles'
                onChangeText={text => this.updateCollection('numBottles', text)} />
            <PfTextInput
                placeholder='Preferred times'
                onChangeText={text => this.updateCollection('preferredTimes', text)} />
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
      dispatch(collectionActions.addCollection(coll))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestCollectionScreen)
