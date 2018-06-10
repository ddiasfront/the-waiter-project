import React, { Component } from "react";
import MenuHeader from "../../Molecules/MenuHeader";
import { Button, ScrollView, Text, StatusBar } from "react-native";

class CodeScanner extends Component {
  render() {
    return (
      <ScrollView>
        <MenuHeader navigation={this.props.navigation} />
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
