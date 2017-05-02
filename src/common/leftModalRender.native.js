import React from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Picker,
} from 'react-native';
import { Actions } from "react-native-router-flux";

import { CardSection } from "../Components/";

export default function Modals() {
    return (
        <View style={styles.container}>

            <Modal
                animationType={"fade"}
                transparent={true}
                visible={true}
                onRequestClose={() => { Actions.pop() }}
            >
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.heading}> Catagories </Text>
                        <CardSection>
                            <Picker
                                style={{ flex: 1 }}
                                selectedValue=""
                                onValueChange={value => {
                                    return (
                                        this.props.getNews(value),
                                        Actions.pop()
                                    )
                                }}
                            >
                                <Picker.Item value='' label='Select Catagories' />
                                <Picker.Item label="Buisness" value="business" />
                                <Picker.Item label="Entertainment" value="entertainment" />
                                <Picker.Item label="Gaming" value="gaming" />
                                <Picker.Item label="General" value="general" />
                                <Picker.Item label="Music" value="music" />
                                <Picker.Item label="Politics" value="politics" />
                                <Picker.Item label="Science And Nature" value="science-and-nature" />
                                <Picker.Item label="Sports" value="sport" />
                                <Picker.Item label="Technology" value="technology" />

                            </Picker>
                        </CardSection>
                    </View>

                </View>
            </Modal>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold"
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
});