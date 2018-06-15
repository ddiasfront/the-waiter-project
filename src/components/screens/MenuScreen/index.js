import React, { Component } from 'react'
import { Container, Content, Button, Text } from 'native-base';
import SingleCard from '../../Atoms/Card'
import Loading from '../../Molecules/Loading'
import MenuHeader from '../../Molecules/MenuHeader'
import {getMenuFirst, getRange} from '../../../api'

import { FlatList } from 'react-native';

import ListThumb from '../../Molecules/ListThumb'

class MenuScreen extends Component {
  state = {
    QrData: null,
    Loading: false,
    Menu: null,
    LastQueriedItemKey: 0,
    NewItemsQueried: null
  }

  _handleState = (key, value) => this.setState({
    [key]: value
  }, () => {
    // console.log(this.state, 'Handlestate')
    key == 'Menu' && this.state.Menu !== null ? this.setState({Loading: false}) : false
  })

  _handleQueryState = (QueryItens) => this.setState({Menu: this.state.Menu.concat(QueryItens)}, () => {
    // console.log(this.state.Menu, 'CONCATENADED QUERY')
  })

  _handleMenu = () => this.state.Menu.map((data, index) => <ListThumb key={index} data={data}/>)

  _handleMenuQuery = () => {
    !this.state.LastQueriedItemKey ? this.setState({LastQueriedItemKey: 0}) : getRange(this.state.LastQueriedItemKey, this._handleQueryState, this._handleState)
  }

  componentWillMount() {
    this.state.Menu == null ? this.setState({Loading: true}, () => {
      getMenuFirst('Menu', this._handleState)
    }) : false
    if ( this.props.navigation.state.params == null ) {
      this.props.navigation.navigate('HomeScreen')
    }
    else {
      let ParsedQRCode = this.props.navigation.state.params.QrData ? JSON.parse(this.props.navigation.state.params.QrData) : false
      !this.props.navigation.state.params.QrData ? this.setState({QrData: null}) : this.setState({QrData: ParsedQRCode})
    }
  }
  
  render() {
    return (
      <Container>
        <MenuHeader navigation={this.props.navigation}/>
        <Content> 
            {/* <SingleCard>
                {this.state.QrData === null ? 'Please Scan the Qr Code' : 'Your table number: ' + this.state.QrData.table}
            </SingleCard> */}
            {this.state.Loading == true &&
              <Loading element={'Menu'}/>
            }
            {this.state.Menu  === null ? 'Menu deppends on QR Code' : 
            <FlatList
              data={this.state.Menu }
              renderItem={
                (item) => <ListThumb data={item}/>
              } 
              keyExtractor={(item, index) => index.toString()}
            />
            }
            <Button
            onPress={this._handleMenuQuery}
            >
            <Text>ClickToLoad</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default MenuScreen;
