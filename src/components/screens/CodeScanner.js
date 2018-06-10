import React, { Component } from "react";
import { Button, ScrollView, Text, StatusBar } from "react-native";

class CodeScanner extends Component {
  render() {
    return (
      <ScrollView>
        <Text> CodeScanner </Text>
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <StatusBar barStyle="default" />  
      </ScrollView>
    );
  }
}

export default CodeScanner;
