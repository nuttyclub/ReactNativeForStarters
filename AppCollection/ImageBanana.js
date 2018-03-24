import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';

//defining a StyleSheet
const styles = StyleSheet.create({
    container: {
        width: 193,
        height: 110
    }
})

class Bananas extends Component {
    render(){


        const pic = {
            //uri is a native prop type that Image Component needs.
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <Image source={pic} style={ styles.container } />
        );
    }
}

export default Bananas;

AppRegistry.registerComponent(
    'AwesomeProject',
    () => Bananas
);
