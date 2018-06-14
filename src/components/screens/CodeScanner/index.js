import React, { Component } from "react";
import {
  Dimensions,
  LayoutAnimation,
  Text,
  StatusBar,
} from "react-native";
import MenuHeader from '../../Molecules/MenuHeader'
import { Container, Content } from 'native-base'
import { BarCodeScanner, Permissions } from 'expo';


class CodeScanner extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data }, () => {
        this.props.navigation.navigate('MenuScreen', {QrData: `${this.state.lastScannedUrl}`})
      });
    }
  };

  render() {
    return (
      <Container>
        <MenuHeader opacity={0.6} navigation={this.props.navigation}/>
        <Content>
          
          {this.state.hasCameraPermission === null
            ? <Text>Requesting for camera permission</Text>
            : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                Camera permission is not granted
                  </Text>
              : <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={{
                  height: Dimensions.get('window').height,
                  width: Dimensions.get('window').width
                }}
              />}
          <StatusBar hidden />
        </Content>
      </Container>
    );
  }
}

export default CodeScanner;


