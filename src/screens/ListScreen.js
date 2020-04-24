import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {

    const friends = [
        { name: 'Sree Harsha', key: '1' },
        { name: 'Pushpitha', key: '2' },
        { name: 'Sanjay', key: '3' },
        { name: 'Bhavana', key: '4' },
        { name: 'Mala', key: '5' },
        { name: 'Chandu', key: '6' },
        { name: 'Krish', key: '7' }
    ];

    const friends1 = [
        { name: 'Sree Harsha' },
        { name: 'Pushpitha' },
        { name: 'Sanjay' },
        { name: 'Bhavana' },
        { name: 'Mala' },
        { name: 'Chandu' },
        { name: 'Krish' }
    ];

    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends1}
            renderItem={({ item }) => {
                return <Text style={styles.style1}>{item.name}</Text>;
            }}/>
    )
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30,
            color: 'red',
            marginHorizontal: 20
        }

    }
);

export default ListScreen;