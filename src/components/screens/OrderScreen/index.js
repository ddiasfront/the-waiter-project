import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import SingleCard from "../../Atoms/Card";
import Loading from "../../Molecules/Loading";
import MenuHeader from "../../Molecules/MenuHeader";
import { getMenuOnLazyLoading ,getMenuOnEnter, getMenuFirst, getRange } from "../../../api";
import {connect} from 'react-redux'
import { FlatList, ListView, View } from "react-native";

import ListThumb from "../../Molecules/ListThumb";

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuHeader navigation={this.props.navigation} />
        {/* { this.state.QrData ?
        <SingleCard>
          {"Your table number: " + this.state.QrData.table}
        </SingleCard> : false
        } */}
        {/* <FlatList
          data={this.state.Menu}
          onEndReached={this._handleMenuQuery}
          onEndReachedThreshold={0.1}
          renderItem={item => <ListThumb table={this.state.QrData} data={item}/>}
          keyExtractor={(item, index) => index.toString()}
        /> */}
      </View>
    );
  }
}


const mapStateToProps = state => {
    return {
      code: state.codeReducer,
      order: state.orderReducer
    }
  }
  

export default connect(mapStateToProps)(OrderScreen);
