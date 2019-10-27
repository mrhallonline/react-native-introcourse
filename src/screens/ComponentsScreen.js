// Part 1
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


// Part 2
const ComponentsScreen = function() {
const myName = "Kevin";
    return(
<View>
 <Text style={styles.textStyle}>Getting started with React Native!</Text>
<Text style={styles.subTextStyle}>My name is {myName}</Text>
</View>
);
};

//Part 3

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subTextStyle: {
        fontSize: 20
    }
});

//Part 4

export default ComponentsScreen;