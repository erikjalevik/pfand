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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.collections)
    };
  }

  _renderRow(coll) {
    return (
      <PfText>
        {coll.name} {coll.address} {coll.numBottles} {coll.preferredTimes}
      </PfText>
    );
  }

  render() {
    return (
      <View style={styles.vbox}>
        <PfText>
          Currently available collections:
        </PfText>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            enableEmptySections={true} />
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
    marginTop: 60
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
