import React from 'react';
import { CodeScanner, Welcome } from './src/components/screens'
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const WelcomeScreen = ({ navigation }) => <Welcome navigation={navigation} />;
WelcomeScreen.navigationOptions = {
  headerTitle: "Welcome"
};

const CodeScannerScreen = ({ navigation }) => (
  <CodeScanner banner={"Drafts Screen"} navigation={navigation} />
);
CodeScannerScreen.navigationOptions = {
  headerTitle: "Drafts"
};

const WelcomeStack = createStackNavigator({
  Welcome: { screen: WelcomeScreen }
});

WelcomeStack.navigationOptions = {
  drawerLabel: "Welcome"
};

const CodeScannerStack = createStackNavigator({
  Drafts: { screen: CodeScannerScreen }
});

CodeScannerStack.navigationOptions = {
  drawerLabel: "Code Scanner"
};

export default DrawerMenu = createDrawerNavigator(
  {
    Welcome: {
      path: "/",
      screen: Welcome
    },
    Drafts: {
      path: "/codescanner",
      screen: CodeScannerStack
    }
  },
  {
    initialRouteName: "Drafts",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);
