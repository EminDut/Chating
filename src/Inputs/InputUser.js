import {TextInput} from 'react-native';
import React, {useState} from 'react';

export default function InputUser({user, setUser}) {
  return (
    <TextInput
      placeholder="Kullanıcı Adı"
      onChangeText={text => setUser(text)}
      value={user}
      style={{
        width: 240,
        height: 50,
        borderRadius: 15,
        borderWidth: 1.2,
        borderColor: 'darkblue',
        padding: 15,
        marginBottom: 15,
        paddingRight: 30,
      }}
    />
  );
}
