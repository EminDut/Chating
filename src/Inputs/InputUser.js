import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function InputUser({user, setUser, password, setPassword}) {
  return (
    <View>
      <TextInput
        onChangeText={text => setUser(text)}
        keyboardType="email-address"
        value={user}
        label="E-Mail"
        underlineColor="transparent"
        labelStyle
        style={{
          width: wp(69),
          height: hp(6),
          backgroundColor: 'white',
          borderWidth: 1.2,
          borderRadius: 5,
          fontSize: 14,
          borderColor:"gray"         
        }}
      />

      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        label="Password"
        underlineColor="transparent"
        secureTextEntry
        labelStyle
        style={{
           width: wp(69),
           height: hp(6),
           backgroundColor: 'white',
           borderWidth: 1,
           borderRadius: 5,
           marginVertical: 5,
           fontSize: 14,
           borderColor:"gray",
           }}
      />

    </View>
  );
}
