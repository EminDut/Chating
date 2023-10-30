import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Avatar, Title, Subheading} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function InputUser({user, setUser, password, setPassword}) {
  return (
    <View>
      <TextInput
        onChangeText={text => setUser(text)}
        value={user}
        label="Email"
        underlineColor="transparent"
        labelStyle
        style={{
          width: wp(70),
          height: hp(6),
          backgroundColor: 'white',
          borderWidth: 1.2,
          borderRadius: 10,
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
          width: wp(70),
          height: hp(6),
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          marginVertical: 5,
          fontSize: 14,
          borderColor:"gray",

        }}
      />
    </View>
  );
}
