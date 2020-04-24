import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const FriendsList = () => {

    const friends = [
        {
            name: 'Sree Harsha',
            age: 26
        },
        {
            name: 'Pushpitha',
            age: 23
        },
        {
            name: 'Sanjay',
            age: 24
        },
        {
            name: 'Bhavana',
            age: 22
        },
        {
            name: 'mala',
            age: 45
        },
        {
            name: 'Chandu',
            age: 47
        }
    ];


    return <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={
            ({ item }) => {
                return <Text style={styles.style1}>{item.name} - Age {item.age}</Text>
            }
        }
    />
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30,
            marginVertical: 15
        }

    }
);

export default FriendsList;