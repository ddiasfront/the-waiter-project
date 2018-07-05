import React from "react";
import {View} from 'native-base'
import {AddItem} from '../../Molecules/AddItem'
import QuantityTracker from '../../Molecules/QuantityTracker'

export default class AddingItemQuantity extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AddItem AddingItem={this.props.AddingItem}/>
        <QuantityTracker _handleQuantity={this.props._handleQuantity} tintcolor={this.props.tintcolor} />
      </View>
    );
  }
}
