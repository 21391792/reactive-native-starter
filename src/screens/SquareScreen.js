import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    console.log(red);
    console.log(blue);
    console.log(green);
    return <View>
        <ColorCounter name='Red'
            onIncrease={(value) => setRed(red + value)}
            onDecrease={(value) => setRed(red - value)}
        />
        <ColorCounter name='Blue'
            onIncrease={(value) => setBlue(blue + value)}
            onDecrease={(value) => setBlue(blue - value)}
        />
        <ColorCounter name='Greeen'
            onIncrease={(value) => setGreen(green + value)}
            onDecrease={(value) => setGreen(green - value)}
        />
        <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})`, marginLeft: 100 }}></View>
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30
        }

    }
);

export default SquareScreen;