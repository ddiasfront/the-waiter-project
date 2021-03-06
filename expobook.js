import React from 'react';
import createExpobook from 'expobook';
import { Container, Content } from 'native-base'
import { textColors } from './src/constants/styles'

import {AddItem} from './src/components/Molecules/AddItem'
import QuantityTracker from './src/components/Molecules/QuantityTracker'
import OrdersList from './src/components/Molecules/OrdersList'
import OrdersListItem from './src/components/Molecules/OrdersListItem'

import AddingItemQuantity from './src/components/Organisms/AddingItemQuantity'
import BarCodeScannerHandler from './src/components/Molecules/BarCodeScanner'
import HeaderSimple from './src/components/Molecules/HeaderSimple'
import ButtonFooter from './src/components/Molecules/ButtonFooter'
import ListThumb from './src/components/Molecules/ListThumb'
import Loading from './src/components/Molecules/Loading'
import MenuHeader from './src/components/Molecules/MenuHeader'
import OrderFinal from './src/components/Molecules/OrderFinal'


import TextButton from './src/components/Atoms/Button'
import SingleCard from './src/components/Atoms/Card'


import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'

let store = createStore(allReducers)



const expobook = createExpobook();

const ordersArray = [
  {
    Name: 'Product 01',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2,
    Photo : "http://bluescaffe.co.za/wp-content/uploads/2017/05/bacon-and-eggs.png"
  },
  {
    Name: 'Product 02',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2,
    Photo : "http://bluescaffe.co.za/wp-content/uploads/2017/05/bacon-and-eggs.png"
  },
  {
    Name: 'Product 03',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2,
    Photo : "http://bluescaffe.co.za/wp-content/uploads/2017/05/bacon-and-eggs.png"
  },
  {
    Name: 'Product 04 tem um longo nome',
    Description: 'Anything',
    Price: 22.34,
    Quantity: 2,
    Photo : "http://bluescaffe.co.za/wp-content/uploads/2017/05/bacon-and-eggs.png"
  }
]

//ATOMS
expobook.add('SingleCard', () =>
<SingleCard>
Card Content
</SingleCard>
);


expobook.add('Text Button', () =>
<TextButton
  full
  rounded
  dark
  style={{ marginTop: 10 }}
  onPress={() => console.log('pressed')}
>
Button Text
</TextButton>
);


//MOLECULES


expobook.add('Add Item', () =>
<Container>
  <Content>
    <AddItem AddingItem={ordersArray[0]} />
  </Content>
</Container>
);

expobook.add('BarCodeScanner Handler', () => <Provider>
<BarCodeScannerHandler store={store}/>
</Provider>);


expobook.add('Button Footer', () =>
<ButtonFooter _handleFooterButton={console.log(`HANDLER BUTTON`)} bgColor={`#000`} textColor={`#fff`}>
 Children here
</ButtonFooter>
);

expobook.add('Header Simple', () =>
<HeaderSimple _handleBackButton={true} _handleCancelButton={true}>
  The Header Title
</HeaderSimple>
);

expobook.add('ListThumb', () =>
<Provider>
<ListThumb store={store} data={{ item: ordersArray[0] }}/>
</Provider>
);

expobook.add('Loading', () =>
<Loading element={`The loading component`}/>
);

expobook.add('Menu Header', () =>
<MenuHeader/>
);


expobook.add('OrderFinal', () =>
<Provider>
<OrderFinal store={store} order={{orders: [
  ordersArray[0]
]}}/>
</Provider>
);


expobook.add('Add Item', () =>
<Container>
  <Content>
    <AddItem AddingItem={ordersArray[0]} />
  </Content>
</Container>
);


expobook.add('Add Item with quantity', () =>
  <AddingItemQuantity tintcolor={textColors.red} AddingItem={ordersArray[0]}/>
);



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