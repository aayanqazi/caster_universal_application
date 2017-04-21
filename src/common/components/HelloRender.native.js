import React from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';


function HelloNative(props,state) {
    return <View>
        <Text>
            {this.state.increment}
            </Text>
        <TouchableHighlight onPress={()=>this.increment_Button()}><Text>Click Me </Text></TouchableHighlight></View>
};

export default HelloNative;