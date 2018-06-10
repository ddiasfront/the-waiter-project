import React from "react";
import {
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body
} from "native-base";

export default class MenuHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>The Waiter</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
