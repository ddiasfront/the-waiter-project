import React, { Component } from "react";
import { Button, Text, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";

class Welcome extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <StatusBar barStyle="default" />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Welcome;
