import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import SingleCard from "../../Atoms/Card";
import Loading from "../../Molecules/Loading";
import MenuHeader from "../../Molecules/MenuHeader";
import { getMenuFirst, getRange } from "../../../api";

import { FlatList, ListView, View } from "react-native";

import ListThumb from "../../Molecules/ListThumb";

class MenuScreen extends Component {
  state = {
    QrData: null,
    Loading: false,
    Menu: null,
    LastQueriedItemKey: 0,
    NewItemsQueried: null
  };
  //MULTI-PURPOSE FUNCTION, SO WE CAN USE IT ANYTIME WE NEED TO CHANGE STATE
  _handleState = (key, value) =>
    this.setState(
      {
        [key]: value
      },
      () => {
        key == "Menu" && this.state.Menu !== null
          ? this.setState({ Loading: false })
          : false;
      }
    );

  //QUERY-TO-STATE.MENU CONCATENATION
  _handleQueryState = QueryItens =>
    this.setState({ Menu: this.state.Menu.concat(QueryItens) });

  //MENU LIST GENERATOR
  _handleMenu = () =>
    this.state.Menu.map((data, index) => <ListThumb key={index} data={data} />);

  //LAZY-LOADING QUERY
  _handleMenuQuery = () => {
    !this.state.LastQueriedItemKey
      ? this.setState({ LastQueriedItemKey: 0 })
      : getRange(
          this.state.LastQueriedItemKey,
          this._handleQueryState,
          this._handleState
        );
  };

  componentWillMount() {
    this.state.Menu == null
      ? this.setState({ Loading: true }, () => {
          getMenuFirst("Menu", this._handleState);
        })
      : false;
    if (this.props.navigation.state.params == null) {
      this.props.navigation.navigate("HomeScreen");
    } else {
      let ParsedQRCode = this.props.navigation.state.params.QrData
        ? JSON.parse(this.props.navigation.state.params.QrData)
        : false;
      !this.props.navigation.state.params.QrData
        ? this.setState({ QrData: null })
        : this.setState({ QrData: ParsedQRCode });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuHeader navigation={this.props.navigation} />
        {this.state.Loading == true && <Loading element={"Menu"} />}
        {this.state.Menu === null ? (
          "Menu deppends on QR Code"
        ) : (
          <SingleCard>
            {this.state.QrData === null
              ? "Please Scan the Qr Code"
              : "Your table number: " + this.state.QrData.table}
          </SingleCard>
        )}

        {this.state.Menu === null ? (
          "Menu deppends on QR Code"
        ) : (
          <FlatList
            data={this.state.Menu}
            onEndReached={this._handleMenuQuery}
            onEndReachedThreshold={0.1}
            renderItem={item => <ListThumb data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    );
  }
}

export default MenuScreen;
