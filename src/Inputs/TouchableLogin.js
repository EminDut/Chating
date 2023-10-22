import { Text,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import React from 'react';

export default function TouchableLogin(props) {
  
  const {handleLogin} = props

  return (
    <TouchableOpacity

      onPress={handleLogin}
      
      style={{

        width : wp(25),
        height : hp(5),
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'darkblue',
        padding: 8,
      }}>
      <Text style={{left: 16 ,top:2}}>Giriş Yap</Text>
    </TouchableOpacity>
  );
}
