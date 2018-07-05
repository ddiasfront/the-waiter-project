import React, { Component } from "react"
import MenuHeader from "../../Molecules/MenuHeader"
import {connect} from 'react-redux'
import { FlatList, View } from "react-native"
import HeaderSimple from '../../Molecules/HeaderSimple'
import OrdersList from "../../Molecules/OrdersList"
import OrderFinal from "../../Molecules/OrderFinal"

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderSimple 
        _handleBackButton={() => this.props.navigation.navigate('MenuScreen')} 
        _handleCancelButton={() => this.props.navigation.navigate('HomeScreen', {HasMenu: true})}
        >
        Orders
        </HeaderSimple>
        <OrdersList
          orders={this.props.order.orders}
          table={this.state.QrData}
        />
        <OrderFinal/>
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
