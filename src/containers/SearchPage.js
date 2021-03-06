import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native'

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  }
  data[key] = value

  var querystring = Object.keys(data)
    .map(k => k + '=' + encodeURIComponent(data[key]))
    .join('&')

  return 'http://api.nestoria.co.uk/api?' + querystring
}

class SearchPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: ''
    }
  }

  onSearchTextChanged(text) {
    console.log('onSearchTextChanged')
    this.setState({ searchString: text })
    console.log(this.state.searchString)
  }

  _executeQuery(query) {
    console.log(query)
    this.setState({ isLoading: true })

    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        })
      )
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' })
    if (response.application_response_code.substr(0, 1) === '1') {
      console.log('Properties found: ' + response.listings.length)
    } else {
      this.setState({ message: 'Location not recognized; please try again.'})
    }
  }

  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1)
    this._executeQuery(query)
  }

  render() {

    var spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> :
      <View/>

    return (
      <View>
        <View style={styles.testContainer}>
          <Text style={styles.testLabel1}>Label1</Text>
          <Text style={styles.testLabel2}>Label2</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.description}>
            Search for houses to buy!
          </Text>
          <Text style={styles.description}>
            Search by place-name, postcode or search near your location.
          </Text>
          <View style={styles.flowRight}>
            <TextInput style={styles.searchInput}
                value={this.state.searchString}
                onChangeText={this.onSearchTextChanged.bind(this)}
                placeholder='Search via name or postcode'/>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onSearchPressed.bind(this)}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Location</Text>
          </TouchableHighlight>
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  testContainer: {
    height: 500,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  testLabel1: {
    margin: 5,
    backgroundColor: 'yellow',
    textAlignVertical: 'bottom' // doesn't work
  },
  testLabel2: {
    //height: 50,
    margin: 5,
    backgroundColor: 'yellow'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    //alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  button: {
    height: 36,
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
})

module.exports = SearchPage
