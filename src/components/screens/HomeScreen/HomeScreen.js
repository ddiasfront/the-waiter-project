import React, { Component } from "react";
import MenuHeader from "../../Molecules/MenuHeader";
import SingleCard from "../../Atoms/Card";
import TextButton from "../../Atoms/Button";
import {
  Container,
  Content
} from "native-base"; 

class HomeScreen extends Component {

  render() {
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
            Scan QR Code {(this.props.navigation.state.params && this.props.navigation.state.params.HasMenu == true) && 
            'Again?'}
          </TextButton>
          {  (this.props.navigation.state.params && this.props.navigation.state.params.HasMenu == true) &&

          <TextButton
            full
            rounded
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("MenuScreen")}
          >
            You got a code, go to Menu.
          </TextButton>
          }
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
