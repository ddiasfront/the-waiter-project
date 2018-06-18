import React, { Component } from 'react'
import { View, Text, Dimensions, LayoutAnimation } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo';

class BarCodeScannerHandler extends Component {
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
      <View style={{ flex: 1 }}>
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
      </View>
    );
  }
}

export default BarCodeScannerHandler

