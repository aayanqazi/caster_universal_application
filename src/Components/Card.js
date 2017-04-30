import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    // console.log(props.children);
    return (
        <View style={styles.containerStyle} >
            {props.children}
            </View>
    );
};


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        marginBottom:20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginLeft: 0, 
        marginTop: 10
    }
};

export {Card};