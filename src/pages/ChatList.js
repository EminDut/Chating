import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import KeyboardControl from "../Inputs/KeyboardControl"





const ChatList = () => {

  return (

    <View>

    <List.Item
      title="user name"
      description="hi i will be waitiHGng for you"
      left={()=> <Avatar.Text label='HG' /> }     
    
    />

    </View>
  )

} 
  
    
   
        
      
    
    


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 13,
//   },
//   resultItem: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//   },
// });

export default ChatList;