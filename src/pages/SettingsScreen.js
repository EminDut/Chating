import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Title, Subheading, Button } from 'react-native-paper';
import firebase from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth';



const SettingScreen = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()

  const navigation = useNavigation();

  useEffect(()=>{
  firebase.auth().onAuthStateChanged(user =>{

  setName( user?.displayName ?? "" );
  setEmail( user?.email ?? "" );
});
  }, [])

  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 16 }}>
      <Avatar.Text label="un" />
        <Title> {name} </Title>
      <Subheading>{email}</Subheading>

      <Button onPress={handleSignOut}  mode="contained" >
        
        Sign Out

        </Button>
    </View>
  );
};

export default SettingScreen;