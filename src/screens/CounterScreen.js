import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CounterScreen = () => {

    const [counter, setCounter] = useState(0);
    //let counter = 0;  //this is bad way to use to store dynamically updating value instead use <b>useState</b>

    return <View>
        <Button title='Increase' onPress={() => {
            setCounter(counter + 1);
            //counter++;  //counter = counter +1; // donot do this
        }} />
        <Button title='Decrease' onPress={() => {
            setCounter(counter - 1);
            //counter--;  // donot do this
        }} />
        <Text>Current Count: {counter}</Text>
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30
        }

    }
);

export default CounterScreen;