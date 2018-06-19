import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import SingleCard from "../../Atoms/Card";
import Loading from "../../Molecules/Loading";
import MenuHeader from "../../Molecules/MenuHeader";
import { getMenuOnLazyLoading ,getMenuOnEnter, getMenuFirst, getRange } from "../../../api";

import { FlatList, ListView, View } from "react-native";

import ListThumb from "../../Molecules/ListThumb";

class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QrData: null,
      Loading: true,
      Menu: null,
      LastQueriedItemKey: 0,
      NewItemsQueried: null
    };
  }

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
    getMenuOnLazyLoading(this.state.LastQueriedItemKey, 5).then((result) => {

      let queryArray = result
      let queryArrayLength = queryArray.length
      let finalItemKey = queryArray[queryArrayLength-1]

      this.setState({LastQueriedItemKey: finalItemKey.key})

      result.map((item) => {
        this.setState({Menu: this.state.Menu.concat(item)}, () => {
        })
      })

    })
  };

  componentDidMount() {
    const _handleQrCode = QrCode => {
      try {
        let ParsedQRCode = JSON.parse(QrCode);
        this.setState({ QrData: ParsedQRCode });
      } catch (err) {
        this.setState({ QrData: null });
      }
    };

    this.props.navigation.state.params
      ? _handleQrCode(this.props.navigation.state.params.QrData)
      : this.props.navigation.navigate("HomeScreen");

    getMenuOnEnter()
      .then(result => {
        this.setState({ LastQueriedItemKey: result[0] });
        this.setState({ Menu: result[1] });
      })
      .then(this.setState({ Loading: false }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuHeader navigation={this.props.navigation} />
        { this.state.QrData ?
        <SingleCard>
          {"Your table number: " + this.state.QrData.table}
        </SingleCard> : false
        }
        <FlatList
          data={this.state.Menu}
          onEndReached={this._handleMenuQuery}
          onEndReachedThreshold={0.1}
          renderItem={item => <ListThumb data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default MenuScreen;
