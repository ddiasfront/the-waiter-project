import React, { Component } from 'react'
import { Container, Content, Button, Text } from 'native-base';
import SingleCard from '../../Atoms/Card'
import Loading from '../../Molecules/Loading'
import MenuHeader from '../../Molecules/MenuHeader'
import {getMenu} from '../../../api'

import { FlatList } from 'react-native';

import ListThumb from '../../Molecules/ListThumb'

class MenuScreen extends Component {
  state = {
    QrData: null,
    Loading: false,
    Menu: null,
    QueryCounter: 0
  }

  _handleState = (key, value) => this.setState({
    [key]: value
  }, () => {
    key == 'Menu' && this.state.Menu !== null ? this.setState({Loading: false}) : false
  })

_handleMenu = () => this.state.Menu.map((data, index) => <ListThumb key={index} data={data}/>)

_handleMenuQuery = () => {
  getMenu()
}

  componentWillMount() {
    this.state.Menu == null ? this.setState({Loading: true}, () => {
      getMenu('Menu', this._handleState, 1, 5)
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
            <SingleCard>
                {this.state.QrData === null ? 'Please Scan the Qr Code' : 'Your table number: ' + this.state.QrData.table}
            </SingleCard>
            {this.state.Loading == true &&
              <Loading element={'Menu'}/>
            }
            {this.state.Menu  === null ? 'Menu deppends on QR Code' : 
            <FlatList
              data={this.state.Menu}
              renderItem={({item}) => 
                <ListThumb key={index} data={item}/> }
            />
            }
            <Button
            onPress={() => this._handleMenuQuery}
            >
            <Text>ClickToLoad</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default MenuScreen;
