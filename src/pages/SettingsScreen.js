import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Title, Subheading, Button } from 'react-native-paper';
import HomeScreen from './HomeScreen';

const SettingScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 16 }}>
      <Avatar.Text label="un" />
        <Title>User Name</Title>
      <Subheading>user@name.com</Subheading>
      <Button onPress={handleSignOut}>Sign Out</Button>
    </View>
  );
};

export default SettingScreen;