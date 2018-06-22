import React from "react";
import {
  View,
  Text,
  Icon,
  Button
} from "native-base";

export default class QuantityTracker extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          itemQuantity: 0
      }
  }
  render() {
    return (
      <View style={{flex:0, 'flexDirection': 'row', 'alignItems': 'center'}}>
       <Button onPress={() => this.setState({itemQuantity: this.state.itemQuantity >= 0 ? this.state.itemQuantity + 1 : 0}, () => {
           this.props._handleQuantity ? this.props._handleQuantity(this.state.itemQuantity >= 0 ? this.state.itemQuantity : 0) : false
       })} transparent>
            <Icon name='ios-add-circle-outline' style={{'color': (this.props.tintcolor ? this.props.tintcolor : false)}}/>
       </Button>
            <Text style={{color: this.props.textcolor}}>{this.state.itemQuantity >= 0 ? this.state.itemQuantity : 0}</Text>
        <Button onPress={() => this.setState({itemQuantity: this.state.itemQuantity > 0 ? this.state.itemQuantity - 1 : 0}, () => {
             this.props._handleQuantity ? this.props._handleQuantity(this.state.itemQuantity >= 0 ? this.state.itemQuantity : 0) : false
        })} transparent>
            <Icon name='ios-remove-circle-outline' style={{'color': (this.props.tintcolor ? this.props.tintcolor : false)}}/>
        </Button>
      </View>
    );
  }
}
