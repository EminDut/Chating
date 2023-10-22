import { TouchableOpacity,Text} from 'react-native';
import React from 'react';

export default function TouchablePrivacy(prop) {
    
const {handlePrivacy} = prop

  return (
    <TouchableOpacity 
    
    onPress={handlePrivacy}
    
    style={{ width: 200, height: 50,  borderColor: "darkblue", padding: 10 }}>
          <Text style={{left:10,color:"red"}}>
            
            Gizlilik Politikası

          </Text>
          </TouchableOpacity>
  );
};
  

