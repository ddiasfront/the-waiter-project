import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListThumb extends Component {
    componentWillMount() {
        console.log(this.props,`props`)
    }
  render() {
    return (
    <List>
        <ListItem>
            <Thumbnail square size={80} source={{ uri: `${this.props.data.Photo}` }} />
            <Body>
            <Text>{this.props.data.Name}</Text>
            <Text note>{this.props.data.Description}</Text>
            </Body>
        </ListItem>
    </List>
    );
  }
}