import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TouchableAccount(prop) {
  const {handleUser} = prop;

  return (
    <TouchableOpacity onPress={handleUser} style={Styles.box}>
      <Text style={Styles.container}>Hesabın yok mu ? Hesap oluştur !</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    top: 20,
    fontSize: 15,
    width: wp(70),
    height: hp(5),
    marginLeft: 42,
    marginTop: 10,
  },
  box: {width: 300, height: 60, borderColor: 'darkblue', padding: 15},
});
