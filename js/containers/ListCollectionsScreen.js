'use strict';

import PfText from '../components/PfText'
import Constants from '../Constants'

import * as collectionActions from '../store/collectionReducer'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  ListView
} from 'react-native';
import { connect } from 'react-redux';

class ListCollectionsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {

    return (
      <View style={styles.vbox}>
        <PfText>
          Currently available collections:
        </PfText>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <PfText>{rowData}</PfText>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // TODO: DRY
  vbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 20
  },
});

function mapStateToProps(store) {
  return {
    collections: store.collections
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCollectionsScreen)
