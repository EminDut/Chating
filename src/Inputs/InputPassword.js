import {View, Text, TextInput} from 'react-native';
import React,{useState} from 'react';

export default function InputPassword({password,setPassword}) {
  return (
    <TextInput
      placeholder="Şifre"
      onChangeText={(text)=>setPassword(text)}
      value={password}
      secureTextEntry

      style={{
        width: 240,
        height: 50,
        borderRadius: 15,
        borderWidth: 1.2,
        borderColor: 'darkblue',
        padding: 15,
        marginBottom: 25,
      }}
    />
  );
}
