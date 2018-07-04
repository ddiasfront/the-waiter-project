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
        {/* { this.state.QrData ?
        <SingleCard>
          {"Your table number: " + this.state.QrData.table}
        </SingleCard> : false
        } */}
        <FlatList
          data={this.props.order.orders}
          // onEndReached={this._handleMenuQuery}
          // onEndReachedThreshold={0.1}
          renderItem={item => <OrdersList table={this.state.QrData} data={item}/>}
          keyExtractor={(item, index) => index.toString()}
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
