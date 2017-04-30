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

import {CardSection} from "../Components/";

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
                            <Text style={styles.heading}> SOURCES </Text>
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
                                    <Picker.Item value='' label='Select Sources' />

                                    <Picker.Item label="Wirtschafts Woche" value="wirtschafts-woche" />
                                    <Picker.Item label="Business Insider" value="business-insider" />
                                    <Picker.Item label="Time" value="time" />
                                    <Picker.Item label="BBC Sport" value="bbc-sport" />
                                    <Picker.Item label="BBC News" value="bbc-news" />
                                    <Picker.Item label="CNN" value="cnn" />
                                    <Picker.Item label="ESPN" value="espn" />
                                    <Picker.Item label="ESPN Cric Info" value="espn-cric-info" />
                                    <Picker.Item label="Google News" value="google-news" />
                                    <Picker.Item label="New Scientist" value="new-scientist" />
                                    <Picker.Item label="Hacker News" value="hacker-news" />

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