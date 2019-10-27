//1
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//2
const ListScreen = function(){
    const friends = [
        {name: 'Friend #1', age: '33'},
        {name: 'Friend #2', age: '33'},
        {name: 'Friend #3', age: '33'},
        {name: 'Friend #4', age: '33'},
        {name: 'Friend #5', age: '33'},
        {name: 'Friend #6', age: '33'},
        {name: 'Friend #7', age: '33'},
        {name: 'Friend #8', age: '33'},
        {name: 'Friend #9', age: '33'}

    ];
    
    return (
        <FlatList 

            keyExtractor={(friend)=>friend.name}
            data={friends} 
            renderItem={function({item}){
                return <Text style={styles.textStyle}>{item.name} -Age {item.age}</Text>
            }}  
        /> 
    );
};

//3
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});

//4
export default ListScreen;