import PfText from '../components/PfText'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

class ListCollectionsScreen extends Component {

  constructor(props) {
    super(props)
  }

  _renderRow(coll) {
    return (
      <PfText>
        {coll.name} {coll.address} {coll.numBottles} {coll.preferredTimes}
      </PfText>
    )
  }

  render() {
    return (
      <View style={styles.vbox}>
        <PfText>
          Currently available collections:
        </PfText>

        { /* Without removeClippedSubviews, the list view sometimes shows up empty until you scroll,
             see https://productpains.com/post/react-native/listview-doesnt-render-rows-until-scroll/ */ }
        <ListView
            dataSource={this.props.dataSource}
            renderRow={this._renderRow}
            enableEmptySections={true}
            removeClippedSubviews={false}
            style={styles.list} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // TODO: DRY
  vbox: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
    marginTop: 60,
    flex: 1
  },
  list: {
    flex: 1
  }
})

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function mapStateToProps(state) {
  return {
    dataSource: ds.cloneWithRows(state.collections)
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCollectionsScreen)
