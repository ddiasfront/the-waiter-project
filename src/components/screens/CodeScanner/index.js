import React, { Component } from "react";
import {
  Text,
  StatusBar,
} from "react-native";
import MenuHeader from '../../Molecules/MenuHeader'
import BarCodeScannerHandler from '../../Molecules/BarCodeScanner'
import { Container, Content } from 'native-base'

class CodeScanner extends Component {
  
  render() {
    return (
      <Container>
        <MenuHeader opacity={0.6} navigation={this.props.navigation}/>
        <Content>
          <BarCodeScannerHandler navigation={this.props.navigation}/> 
          <StatusBar hidden />
        </Content>
      </Container>
    );
  }
}

export default CodeScanner;


