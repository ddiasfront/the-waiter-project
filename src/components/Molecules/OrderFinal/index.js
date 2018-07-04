import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View, Text} from 'native-base'
import * as colors from  '../../../constants/styles'
import { withNavigation } from 'react-navigation'
import { textColors } from '../../../constants/styles'

class OrderFinal extends Component {
 
   constructor(props) {
       super(props) 
       this.state = {
           ordersPrice: 0
       }
       this.calculateOrders = this.calculateOrders.bind(this)
   }

  calculateOrders() {
    const itemsPrice = this.props.order.orders.map((item) => {
        return (item.Price * item.Quantity)
     })
    const fullPrice =  itemsPrice.reduce((total, num) => total + num)
    this.setState({
        ordersPrice: fullPrice
    })
  }

  componentDidMount() {
      this.calculateOrders()
  }

  render() {
    return (
     <View style={{backgroundColor: `${textColors.red}`, height: 50, flex:0, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
        {this.state.ordersPrice}
       </Text>
    </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer
  }
}

export default withNavigation(connect(mapStateToProps)(OrderFinal))