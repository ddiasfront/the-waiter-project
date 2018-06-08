import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("FindTable")}
        />
      </View>
    );
  }
}

export default Welcome;
