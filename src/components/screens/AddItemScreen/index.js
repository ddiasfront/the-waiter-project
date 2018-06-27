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
import {addNewOrder} from '../../../../actions/order'

class AddItemScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OrderQuantity: undefined,
            OrderItem: undefined,
            AddingItem: this.props.navigation.state.params.AddingItem
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
        OrderItem: {
            Table: this.state.AddingItem.Table.table,
            Name: this.state.AddingItem.Name,
            Description: this.state.AddingItem.Description,
            Price: this.state.AddingItem.Price,
            Quantity: this.state.OrderQuantity
        }
    }, () => {
      console.log(this.props)
      this.props.addNewOrder(this.state.OrderItem)
      // insertOrder(this.state.OrderItem.Table, this.state.OrderItem)
    }) : false
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemScreen);
