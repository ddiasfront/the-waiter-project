import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class HeaderSimple extends Component {

  render() {
    return (
        <Header>
        {this.props._handleBackButton ? 
          <Left>
            <Button transparent onPress={this.props._handleBackButton}>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
         : false}
          <Body>
            <Title>{this.props.children}</Title>
          </Body>
        {this.props._handleCancelButton ?
          <Right>
            <Button transparent onPress={this.props._handleCancelButton}>
              <Text>Cancel</Text>
            </Button>
          </Right>
         : false}
        </Header>
    );
  }
}