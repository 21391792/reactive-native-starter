import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = ({ imageSrc, title, imageScore }) => {
    return <View>
        <Image source={imageSrc} />
        <Text style={styles.style}>{title} </Text>
        <Text>Image Score - {imageScore}</Text>
    </View>
};

const styles = StyleSheet.create(
    {
        style: {
            fontSize: 30
        }
         
    }
);

export default ImageDetail;