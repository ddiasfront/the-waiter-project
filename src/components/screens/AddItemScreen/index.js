import React, { Component } from "react";
import { Container, Content } from "native-base";
import AddingItemQuantity from "../../Organisms/AddingItemQuantity/index";
import { textColors } from "../../../constants/styles";
import HeaderSimple from "../../Molecules/HeaderSimple";
import ButtonFooter from "../../Molecules/ButtonFooter";
import { connect } from "react-redux";
import {
  addNewOrder,
  addNewItemToOrder,
  updateOrderItem
} from "../../../../actions/order";

class AddItemScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderQuantity: 0,
      OrderItem: undefined,
      AddingItem: {
        ...this.props.order.newItem,
        Quantity: 0
      }
    };
    this._handleQuantity = this._handleQuantity.bind(this);
    this._handleItem = this._handleItem.bind(this);
  }

  _handleQuantity(quantity) {
    this.setState({ OrderQuantity: quantity }, () => {
      this.setState(
        {
          AddingItem: {
            ...this.state.AddingItem,
            Quantity: this.state.OrderQuantity
          }
        }
      );
    });
  }

  _handleItem() {
    const _onAddOrder = () =>
      new Promise(resolve => {
        resolve(this.props.addNewOrder(this.state.AddingItem));
      });

    const _onUpdateOrder = () =>
      new Promise(resolve => {
        resolve(this.props.updateOrderItem(this.state.AddingItem));
      });

    this.state.OrderQuantity > 0
      ? this.props.order.orders.length === 0
        ? _onAddOrder().then(this.props.navigation.navigate("OrderScreen"))
        : this.props.order.orders.every(
            order => order.Name !== this.state.AddingItem.Name
          )
          ? _onAddOrder().then(this.props.navigation.navigate("OrderScreen"))
          : _onUpdateOrder().then(this.props.navigation.navigate("OrderScreen"))
      : false;
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <HeaderSimple
          _handleBackButton={() => this.props.navigation.navigate("MenuScreen")}
          _handleCancelButton={() =>
            this.props.navigation.navigate("HomeScreen", { HasMenu: true })
          }
        >
          Add Item Screen
        </HeaderSimple>
        <Content
          contentContainerStyle={{
            flex: 1
          }}
        >
          <AddingItemQuantity
            AddingItem={this.state.AddingItem}
            _handleQuantity={this._handleQuantity}
            tintcolor={textColors.red}
          />
        </Content>
        <ButtonFooter
          bgColor={textColors.red}
          textColor={textColors.white}
          _handleFooterButton={this._handleItem}
        >
          Adicionar ao pedido
        </ButtonFooter>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewOrder: order => {
      dispatch(addNewOrder(order));
    },
    addNewItemToOrder: () => {
      dispatch(addNewItemToOrder());
    },
    updateOrderItem: itemUpdate => {
      dispatch(updateOrderItem(itemUpdate));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemScreen);
