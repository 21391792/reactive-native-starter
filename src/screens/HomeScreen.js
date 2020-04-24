import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {   //this is the es feature that instead of passing entire props, we know we use navigation everywhere this is the best way

  return <View>
    <Text style={styles.text}>Hi There!!</Text>
    <Button
    onPress={() => navigation.navigate('Components') }
    title='Go to Components Screen'  
    />
    <Button
    onPress={() => navigation.navigate('FriendsList') }
    title='Go to Friends List'  
    />
    <Button
    onPress={() => navigation.navigate('Image') }
    title='Go to Image Screen'  
    />
    <Button
    onPress={() => navigation.navigate('Counter') }
    title='Go to Counter'  
    />
    <Button
    onPress={() => navigation.navigate('Color') }
    title='Go to Color Demo'  
    />
    <Button
    onPress={() => navigation.navigate('Square') }
    title='Go to Color Square Demo'  
    />
     <Button
    onPress={() => navigation.navigate('SquareScreenReducer') }
    title='Go to Color Square with Reducer Demo'  
    />
    <Button
    onPress={() => navigation.navigate('CounterReducer') }
    title='Go to Counter with Reducer Demo'  
    />
    {/* <TouchableOpacity onPress= {() => props.navigation.navigate('FriendsList')}>
      <Text style={styles.text}>Go To List Screen</Text>
    </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green',
    textAlign: "center",
    fontStyle: "italic"
  }
});

export default HomeScreen;
