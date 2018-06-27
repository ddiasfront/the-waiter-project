import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';



class ButtonFooter extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button onPress={() => this.props._handleFooterButton()} style={{zIndex: 99999, backgroundColor: this.props.textColors.red}} full>
              <Text style={{color: this.props.textColors.white}}>{this.props.children}</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default ButtonFooter;
