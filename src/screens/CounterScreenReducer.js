import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return { ...state, count: state.count + action.payload };
};

const CounterReducerScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    //let counter = 0;  //this is bad way to use to store dynamically updating value instead use <b>useState</b>

    return <View>
        <Button title='Increase' onPress={() => {
            dispatch({ type: 'increment', payload: 1 });
            //counter++;  //counter = counter +1; // donot do this
        }} />
        <Button title='Decrease' onPress={() => {
            dispatch({ type: 'decrement', payload: -1 });
            //counter--;  // donot do this
        }} />
        <Text>Current Count: {state.count}</Text>
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30
        }

    }
);

export default CounterReducerScreen;