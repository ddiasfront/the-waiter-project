import React, { Component } from "react";
import { Button, Text } from "native-base";

class TextButton extends Component {
  render() {
    return (
      <Button
        {...this.props}
        style={this.props.style}
        onPress={() => this.props.onPress()}
      >
        <Text>{this.props.children}</Text>
      </Button>
    );
  }
}

export default TextButton;
