import React from "react";
import {
  Body,
  Text,
  Card,
  CardItem
} from "native-base";

export default class SingleCard extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>
              {this.props.children}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
