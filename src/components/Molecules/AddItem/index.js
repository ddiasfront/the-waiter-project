import React from 'react'
import { Card, CardItem, Text, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';

export const AddItem = (props) => {
    return (
      <Card style={{flex: 5, flexDirection: 'column', alignContent: 'space-around'}}>
        <CardItem style={{flex: 1, alignSelf: 'flex-start'}}>
          <Left>
            <Body>
              <Text style={{fontSize: 30}}>{props.AddingItem.Name}</Text>
              <Text note>{props.AddingItem.Description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={{flex: 2, alignItems: 'flex-end'}} cardBody>
          <Image source={{uri: `${props.AddingItem.Photo}`}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
      </Card>
    )
}