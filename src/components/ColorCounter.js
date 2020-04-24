import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ColorCounter = ({ name, onIncrease, onDecrease }) => {
    return <View>
        <Text style={{ textAlign: "center", color: 'red'}}>{name}</Text>
        <Button title={`Increase ${name}`}
            onPress={() => {
                onIncrease(10);
            }}
        />
        <Button title={`Decrease ${name}`}
            onPress={() => {
                onDecrease(10);
            }}
        />
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30
        }

    }
);

export default ColorCounter;