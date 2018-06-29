import React, { Component } from 'react';
import {ListItem, Thumbnail, Text, Body, View } from 'native-base';
import {formatPrice} from '../../../utils/formatPrice'
import { withNavigation } from 'react-navigation';
import {addNewItem, addNewItemToOrder } from '../../../../actions/order'
import {connect} from 'react-redux'

class ListThumb extends Component {
  
  componentDidMount() {
    this.setState({
      AddingItem: 0
    })
  }

  _handleQuantity = QuantityTracker => this.setState({QuantityTracker: QuantityTracker})

  render() {
    return (
    <View style={{flex:0}}>
      <ListItem onPress={() => 
        this.setState({
          AddingItem: {
            Table: this.props.table,
            Name:this.props.data.item.Name,
            Price: this.props.data.item.Price,
            Description: this.props.data.item.Description,
            Photo: this.props.data.item.Photo
          }} ,() => {
            this.props.addNewItem(this.state.AddingItem)
            this.props.navigation.navigate('AddItemScreen')
          })
      } 
      style={{'flexDirection':'column', alignItems: 'flex-start'}}>
        <View style={{flexDirection: 'row'}}>
          <Body style={{alignItems: 'flex-start', flexDirection: 'column', flex:2} }>
          <Text style={{paddingBottom: 3}}>{this.props.data.item.Name}</Text>
          <Text style={{paddingBottom: 3}}>{this.props.data.item.Price ? formatPrice(this.props.data.item.Price, 'R$') : 'Please verify if theres a price with the vendor'}</Text>
          <Text note>{this.props.data.item.Description}</Text>
          </Body>
          {this.props.data.item.Photo &&
            <Thumbnail square size={80} source={{ uri: `${this.props.data.item.Photo}` }} />
          }
        </View>
      </ListItem>
    </View>
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
    addNewItem: (code) => {
      dispatch(addNewItem(code))
    }
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ListThumb))