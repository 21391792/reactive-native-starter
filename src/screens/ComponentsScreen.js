import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = <Text style={style.textStyle}>Good Afternoon</Text>;

    return <View>
        <Text style={style.textStyle}>This is my first component I built on react native</Text>
        {greeting}
    </View>
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        textAlign: 'center',
        color: 'red'
    }
});

export default ComponentsScreen;

