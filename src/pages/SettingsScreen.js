import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


function SettingsScreen() {

    const navigation = useNavigation();

    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor:"orange"}}>

        <Text>SettingsScreen</Text>
        <Ionicons name="hand-right" color={"purple"} size={250} />
        


      </View>
    );
  }

  


  export default SettingsScreen;