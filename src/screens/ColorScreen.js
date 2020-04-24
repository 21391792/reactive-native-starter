import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';


const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);
    return <View>
        <Button
            title='Add a Color'
            onPress={() => {
                setColors([...colors, randomRgb()]);
            }}
        />        
        <FlatList
        keyExtractor={(item) => item} 
        data={colors}
        renderItem= {({ item }) => {
            return <View style={{ height: 100, width: 200, backgroundColor: item, marginLeft: 100 }}></View>
        }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${blue}, ${green})`;

}

const styles = StyleSheet.create(
    {
        style: {
            fontSize: 30
        }

    }
);

export default ColorScreen;