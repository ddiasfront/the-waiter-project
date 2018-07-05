import React, { Component } from 'react';
import { List, ListItem, Text, Left, Right, Icon, View, Button, Container } from 'native-base'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import {textColors} from '../../../constants/styles'
import {formatPrice} from '../../../utils/formatPrice'

export default class OrdersListItem extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ListItem style={{flex:1}}>
          <Left style={{flex:4, alignContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{flex:1}}>{this.props.data.item.Quantity} x</Text>
            <Text style={{flex:4}}>{this.props.data.item.Name}</Text>
            <Text style={{flex:2}}>{formatPrice(this.props.data.item.Price)}</Text>
          </Left>
          <Right style={{flex:1}}>
              <Icon name="ios-eye" style={{color: `${textColors.black}`}}/>
          </Right>
        </ListItem>
      </View>
    );
  }
}