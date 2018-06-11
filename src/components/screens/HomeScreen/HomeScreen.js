import React, { Component } from "react";
import { StatusBar } from "react-native";
import MenuHeader from "../../Molecules/MenuHeader";
import SingleCard from "../../Atoms/Card";
import TextButton from "../../Atoms/Button";
import * as firebase from 'firebase'
import {
  Container,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";

class HomeScreen extends Component {
  componentWillMount() {
    firebase.database().ref('/tables').on('value', (snapshot) => {
      const tables = snapshot.val()
      this.setState({
        tables: tables
      }, () => {
        console.log(this.state.tables)
      })
    });
  }
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
            Scan QR Code
          </TextButton>
          <TextButton
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("MyOrders")}
          >
            See Your Orders
          </TextButton>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
