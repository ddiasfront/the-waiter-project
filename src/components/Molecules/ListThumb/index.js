import React, { Component } from 'react';
import {ListItem, Thumbnail, Text, Body, View } from 'native-base';
import {formatPrice} from '../../../utils/formatPrice'
import TextButton from '../../Atoms/Button'
import QuantityTracker from '../../Molecules/QuantityTracker'
import {textColors} from '../../../constants/styles'

export default class ListThumb extends Component {
  
  componentDidMount() {
    this.setState({
      QuantityTracker: 0
    })
  }

  _handleQuantity = QuantityTracker => this.setState({QuantityTracker: QuantityTracker})

  render() {
    return (
    <View style={{flex:0}}>
      <ListItem style={{'flexDirection':'column', alignItems: 'flex-start'}}>
        <View style={{flexDirection: 'row'}}>
          <Body style={{alignItems: 'flex-start', flexDirection: 'column', flex:2} }>
          <Text style={{paddingBottom: 3}}>{this.props.data.item.Name}</Text>
          <Text style={{paddingBottom: 3}}>{this.props.data.item.Price ? formatPrice(this.props.data.item.Price, 'R$') : 'Please verify if theres a price with the vendor'}</Text>
          <Text note>{this.props.data.item.Description}</Text>
          </Body>
          <Thumbnail square size={80} source={{ uri: `${this.props.data.item.Photo}` }} />
        </View>
        <View style={{alignItems: 'flex-start', 'paddingTop': 12, flexDirection: 'row'}}>
          <QuantityTracker _handleQuantity={this._handleQuantity} tintcolor={textColors.red}/>
          <TextButton onPress={() => console.log('this button', this.props, this.state)}>Tell you what</TextButton>
        </View>
      </ListItem>
    </View>
    );
  }
}