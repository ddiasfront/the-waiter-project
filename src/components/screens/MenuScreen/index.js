import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import SingleCard from '../../Atoms/Card'

class MenuScreen extends Component {
  state = {
    QrData: undefined
  }
  componentWillMount() {
    !this.props.navigation.state.params.QrData ? this.setState({QrData: null}) : this.setState({QrData: this.props.navigation.state.params.QrData})
  }
  
  render() {
    return (
      <Container>
        <Content> 
            <SingleCard>
                {this.state.QrData === null ? 'Please Scan the Qr Code' : this.state.QrData}
            </SingleCard> 
        </Content>
      </Container>
    );
  }
}

export default MenuScreen;
