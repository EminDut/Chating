import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function TouchableTerms({onPress}) {
  return (
    <TouchableOpacity

      onPress={onPress}
      
      style={styles.container} >

      <Text style={styles.text} >
        
        Kullanım Şartları

        </Text>
    </TouchableOpacity>
  );
}

const styles= StyleSheet.create({

container : {
  width: 200,
  height: 50,
  borderColor: 'darkblue',
  padding: 10,

},

text:{
  left: 70, 
  color: 'red',


}
})
