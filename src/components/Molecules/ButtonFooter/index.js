import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';



class ButtonFooter extends Component {
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button onPress={() => this.props._handleFooterButton()} style={{zIndex: 99999, backgroundColor: this.props.bgColor}} full>
              <Text style={{color: this.props.textColor}}>{this.props.children}</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default ButtonFooter;
