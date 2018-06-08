import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class FindTable extends Component {
  render() {
    return (
      <View>
        <Text> FindTable </Text>
        <Button
          title="Welcome"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default FindTable;
