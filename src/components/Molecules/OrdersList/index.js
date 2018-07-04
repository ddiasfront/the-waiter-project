import React, { Component } from 'react';
import { Content, SwipeRow, View, Text, Icon, Button } from 'native-base'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'

class OrdersList extends Component {
  render() {
    return (
      <View>
        <SwipeRow
          rightOpenValue={-75}
          body={
            <View style={{flex: 1}}>
              <Button transparent style={{flex:1, flexDirection: 'row'}} onPress={() => console.log('love this item, but edit')}>
                <Text>{this.props.data.item.Quantity}</Text>
                <Text>{this.props.data.item.Name}</Text>
                <Text>{this.props.data.item.Price * this.props.data.item.Quantity}</Text>
              </Button>
            </View>
          }
          right={
            <Button danger onPress={() => alert('Trash')}>
              <Icon active name="trash" />
            </Button>
          }
        />
    </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addNewItem: (code) => {
      dispatch(addNewItem(code))
    }
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(OrdersList))