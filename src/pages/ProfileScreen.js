import * as React from 'react';
import { View, Text,Image,TextInput,StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


const logoImg = require('../assets/emin.jpg');

function ProfileScreen() {
  
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
        
  <View style={{ height: 300, backgroundColor: 'skyblue'}}>
  <Image
          source={logoImg}
          style={{width: 400, height: 350}}
        />
  </View>
  <View style={{ flex: 1, paddingHorizontal:10, backgroundColor:"cornsilk",}}>
    
  <TextInput placeholder="Emin_Ex" style={styles.container}  />
    
  
    
    <View style={{flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>   
            <Ionicons name="heart" color={"red"} size={25} />  
            <TextInput style={styles.box} placeholder=' Beğeni: 500'/>
        </View>  
    </View>

    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>   
         <Ionicons name="person-sharp" color={"black"} size={25} />   
         <TextInput style={styles.box} placeholder= 'Takipçi: 254'/>
      </View>   
    </View>
  
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"}}>   
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="person-add-sharp" color={"black"} size={25} />    
          <TextInput   style={styles.box} placeholder='Takip Edilen'/>   
      </View>
    </View>
   
    <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5, backgroundColor: "white" }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="logo-mastodon" color={"black"} size={25} />
          <TextInput style={styles.box} placeholder='Mesaj' />
      </View>
      <View style={{ flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5, backgroundColor: "white" }}></View>
    </View>
   
  </View>
</View>


     

    );
  }


  const styles = StyleSheet.create({

    container:{
      fontSize:20,fontWeight:'bold'
    },

    box :{
      flex: 1, justifyContent: 'center', marginBottom: 0,  borderColor: 'gray', backgroundColor:"white",padding:10,

    },

    reality:{
      flex: 0.3, justifyContent: 'center', marginBottom: 2, borderWidth: 0.5, borderColor: 'gray',  borderRadius: 5,backgroundColor:"white"

    },

    text:{

    },

    iron: {


    },




  })




  


  export default ProfileScreen;

  