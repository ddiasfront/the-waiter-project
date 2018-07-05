import React, { Component } from 'react';
import { FlatList } from "react-native"
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {textColors} from '../../../constants/styles'
import {formatPrice} from '../../../utils/formatPrice'
import OrdersListItem from '../OrdersListItem'

export default class OrdersList extends Component {
  render() {
    return (
      <FlatList
      data={this.props.orders}
      // onEndReached={this._handleMenuQuery}
      // onEndReachedThreshold={0.1}
      renderItem={item => <OrdersListItem table={this.props.table} data={item}/>}
      keyExtractor={(item, index) => index.toString()}
    />
    );
  }
}