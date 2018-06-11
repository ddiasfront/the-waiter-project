import React, { Component } from 'react'
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import SingleCard from '../../Atoms/Card'
import {getMenu} from '../../../api'

import ListThumb from '../../Molecules/ListThumb'

class MenuScreen extends Component {
  state = {
    QrData: null,
    Menu: null
  }

  _handleState = (key, value) => this.setState({
    [key]: value
  })

_handleMenu = () => this.state.Menu.map((data, index) => <ListThumb key={index} data={data}/>)
      
  

  componentWillMount() {
    !this.props.navigation.state.params.QrData ? this.setState({QrData: null}) : this.setState({QrData: this.props.navigation.state.params.QrData})
    getMenu('Menu', this._handleState)
  }
  
  render() {
    return (
      <Container>
        <Content> 
            <SingleCard>
                {this.state.QrData === null ? 'Please Scan the Qr Code' : this.state.QrData}
            </SingleCard>
            {this.state.Menu  === null ? 'Menu deppends on QR Code' : this._handleMenu()}
        </Content>
      </Container>
    );
  }
}

export default MenuScreen;
