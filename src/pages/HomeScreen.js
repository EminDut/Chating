import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
      }}>
      <Text>HomeScreen</Text>
      <Ionicons name="hand-right" color={'white'} size={250} />
    </View>
  );
}

export default HomeScreen;
