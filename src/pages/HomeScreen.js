import * as React from 'react';
import {View, Image} from 'react-native';

const logoImg = require('../assets/sas.jpg');

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
      }}>
      <Image
        source={logoImg}
        style={{width: 800, height: 780, marginRight: 385}}
      />
    </View>
  );
}

export default HomeScreen;
