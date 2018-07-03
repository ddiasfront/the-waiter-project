import React, { Component } from "react";
import { Container, Content, Footer, Button } from "native-base";
import TextButton from '../../Atoms/Button'
import QuantityTracker from '../../Molecules/QuantityTracker'
import {textColors} from '../../../constants/styles'
import {AddItem} from '../../Molecules/AddItem'
import HeaderSimple from '../../Molecules/HeaderSimple'
import ButtonFooter from '../../Molecules/ButtonFooter'
import {insertOrder} from '../../../api'
import {connect} from 'react-redux'
import {addNewOrder, addNewItemToOrder, updateOrderItem} from '../../../../actions/order'

class AddItemScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OrderQuantity: undefined,
            OrderItem: undefined,
            AddingItem: this.props.order.newItem
        };
        this._handleQuantity = this._handleQuantity.bind(this)
        this._handleItem = this._handleItem.bind(this)
    }

  _handleQuantity(quantity) {
    this.setState({OrderQuantity: quantity})
  }

  _handleItem() {
    this.state.OrderQuantity > 0 ? 
    this.setState({
      AddingItem: {
        ...this.state.AddingItem,
        Quantity: this.state.OrderQuantity
      }
    }, () => {
      (this.props.order && this.props.order.orders && this.props.order.orders.length > 0) ? this.props.order.orders.map((item) => {
        if ( item.Name == this.state.AddingItem ) {
          this.props.updateOrderItem(this.state.AddingItem)
        }
      }) : this.props.addNewOrder(this.state.AddingItem)
    }) : this.props.addNewOrder(this.state.AddingItem)
  } 

  componentDidUpdate() {
    console.log(this.props.order)
  }
  
  componentDidMount() {
    console.log(this.props.order.newItem, 'NEW ITEM SELECTED FOR ADD ------------------------')
  }
  
  render() {
    return (
      <Container style={{flex:1}}>
       <HeaderSimple 
        _handleBackButton={() => this.props.navigation.navigate('MenuScreen')} 
        _handleCancelButton={() => this.props.navigation.navigate('HomeScreen', {HasMenu: true})}
        >
        Add Item Screen
        </HeaderSimple>
        <Content contentContainerStyle={{   
          flex: 1
        }}>
            <AddItem AddingItem={this.state.AddingItem} />
            <QuantityTracker _handleQuantity={this._handleQuantity} tintcolor={textColors.red}/>
        </Content>
       <ButtonFooter textColors={textColors} _handleFooterButton={this._handleItem}>
        Adicionar ao pedido
       </ButtonFooter> 
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewOrder: (order) => {
      dispatch(addNewOrder(order))
    },
    addNewItemToOrder: () => {
      dispatch(addNewItemToOrder())
    },
    updateOrderItem: (itemUpdate) => {
      dispatch(updateOrderItem(itemUpdate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemScreen);
