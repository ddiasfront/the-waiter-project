import React from 'react';
import createExpobook from 'expobook';
import QuantityTracker from './src/components/Molecules/QuantityTracker'
import OrdersList from './src/components/Molecules/OrdersList'
import OrdersListItem from './src/components/Molecules/OrdersListItem'
import { Container, Content } from 'native-base'
import { textColors } from './src/constants/styles'

const expobook = createExpobook();

const ordersArray = [
  {
    Name: 'Product 01',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2
  },
  {
    Name: 'Product 02',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2
  },
  {
    Name: 'Product 03',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2
  },
  {
    Name: 'Product 04 tem um longo nome',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2
  }
]

expobook.add('Quantity Tracker', () => <QuantityTracker tintcolor={textColors.red}/>);

expobook.add('Orders List', () => <OrdersList orders={ordersArray}/>);

expobook.add('Orders ListItem', () => 
  <Container>
    <Content>
      <OrdersListItem data={{item: ordersArray[0]}}/>
    </Content>
  </Container>
);

export default expobook.build();