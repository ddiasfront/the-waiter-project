import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { FlatList } from 'react-native';
import {formatPrice} from '../../../utils/formatPrice'

export default class ListThumb extends Component {
    componentWillMount() {
        console.log(this.props,`props`) 
    }
  render() {
    return (
    <ListItem style={{alignItems: 'flex-start'}}>
        <Body>
        <Text style={{paddingBottom: 3}}>{this.props.data.Name}</Text>
        <Text style={{paddingBottom: 3}}>{this.props.data.Price ? formatPrice(this.props.data.Price, 'R$') : 'Please verify if theres a price with the vendor'}</Text>
        <Text note>{this.props.data.Description}</Text>
        </Body>
        <Thumbnail square size={80} source={{ uri: `${this.props.data.Photo}` }} />
    </ListItem>
    );
  }
}