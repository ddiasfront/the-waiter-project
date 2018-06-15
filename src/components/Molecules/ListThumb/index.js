import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { FlatList } from 'react-native';
import {formatPrice} from '../../../utils/formatPrice'

export default class ListThumb extends Component {
    componentWillMount() {
    }
  render() {
    return (
    <ListItem style={{alignItems: 'flex-start'}}>
        <Body>
        <Text style={{paddingBottom: 3}}>{this.props.data.item.Name}</Text>
        <Text style={{paddingBottom: 3}}>{this.props.data.item.Price ? formatPrice(this.props.data.item.Price, 'R$') : 'Please verify if theres a price with the vendor'}</Text>
        <Text note>{this.props.data.item.Description}</Text>
        </Body>
        <Thumbnail square size={80} source={{ uri: `${this.props.data.item.Photo}` }} />
    </ListItem>
    );
  }
}