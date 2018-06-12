import React, { Component } from 'react'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Spinner } from 'native-base';
import SingleCard from '../../Atoms/Card'
import Loading from '../../Molecules/Loading'
import {getMenu} from '../../../api'

import ListThumb from '../../Molecules/ListThumb'

class MenuScreen extends Component {
  state = {
    QrData: null,
    Loading: false,
    Menu: null
  }

  _handleState = (key, value) => this.setState({
    [key]: value
  }, () => {
    key == 'Menu' && this.state.Menu !== null ? this.setState({Loading: false}) : false
  })

_handleMenu = () => this.state.Menu.map((data, index) => <ListThumb key={index} data={data}/>)

  componentWillMount() {
    this.state.Menu == null ? this.setState({Loading: true}, () => {
      getMenu('Menu', this._handleState)
    }) : false
    !this.props.navigation.state.params.QrData ? this.setState({QrData: null}) : this.setState({QrData: this.props.navigation.state.params.QrData})
  }
  
  render() {
    return (
      <Container>
        <Content> 
            <SingleCard>
                {this.state.QrData === null ? 'Please Scan the Qr Code' : this.state.QrData}
            </SingleCard>
            {this.state.Loading == true &&
              <Loading element={'Menu'}/>
            }
            {this.state.Menu  === null ? 'Menu deppends on QR Code' : this._handleMenu()}
        </Content>
      </Container>
    );
  }
}

export default MenuScreen;
