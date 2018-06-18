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
      <Card style={{flex: 0  }}>
        <CardItem>
            <Text>
              {this.props.children}
            </Text>
        </CardItem>
      </Card>
    );
  }
}
