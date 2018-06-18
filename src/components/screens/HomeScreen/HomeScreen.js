import React, { Component } from "react";
import MenuHeader from "../../Molecules/MenuHeader";
import SingleCard from "../../Atoms/Card";
import TextButton from "../../Atoms/Button";
import {
  Container,
  Content
} from "native-base"; 

import * as textColors from '../../../constants/styles.js'

class HomeScreen extends Component {
  render() {
    console.log(textColors)
    return (
      <Container>
        <MenuHeader navigation={this.props.navigation} />
        <Content padder>
          <SingleCard>
            {this.props.tables}
            Easy make your orders, start by scanning the QR code on your table
          </SingleCard>
          <TextButton
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("CodeScanner")}
          >
            Scan QR Code
          </TextButton>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
