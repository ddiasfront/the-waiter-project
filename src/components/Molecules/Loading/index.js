import React from 'react'
import { Text, Spinner, View } from 'native-base';

const Loading = (props) => {
    return (
    <View  style={{
        flexDirection: "column",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Spinner/>>
        <Text>{`Loading ${props.element}`}</Text>
    </View>
    );
}

export default Loading;
