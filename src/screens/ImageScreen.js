import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/imageDetail';


const ImageScreen = () => {
    return <View>
        <Text style={styles.style1}>Image Screen</Text>
        <ImageDetail title='Forest' imageSrc={require('../../assets/forest.jpg')} imageScore={9}/>
        <ImageDetail title='Beach' imageSrc={require('../../assets/beach.jpg')} imageScore={7}/>
        <ImageDetail title='Mountain' imageSrc={require('../../assets/mountain.jpg')} imageScore={10} />
    </View>
};

const styles = StyleSheet.create(
    {
        style1: {
            fontSize: 30,
            color: 'green',
            textAlign: "center"
        }

    }
);

export default ImageScreen;