import { StyleSheet,View, Text, KeyboardAvoidingView, TouchableOpacity, Alert,} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import KeyboardControl from './KeyboardControl';
import auth from '@react-native-firebase/auth';
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';
import {TextInput,Subheading} from "react-native-paper";


export default function NewRecord() {
  
  const navigation = useNavigation();



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState("");
  const [error,setError] = useState("")


  const isPasswordStrong = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/.test(password);


  const NewRecord = async () => {
    if (!isPasswordStrong) {
      Alert.alert(
        'Şifre Zayıf',
        'Şifreniz zorluk kriterlerini karşılamıyor. Daha güçlü bir şifre seçin.',
      );
      return; 
    }
  
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);

      await response.user.updateProfile({ displayName: name });

      console.log('Yeni kullanıcı oluşturuldu:', response.user);
      Alert.alert('Kayıt Başarılı', 'Kullanıcı başarıyla kaydoldu');

      setEmail('');
      setPassword('');
      navigation.navigate('HomeScreen'); 

    } catch (error) {
      
      setError(error.error);

      Alert.alert(
        'Kayıt olma hatası',
        'Kayıt olma işlemi başarısız oldu. Lütfen tekrar deneyin.',
      );
    }
  };
  

  const handleNavigate = () => {
    navigation.navigate('NewAccoundTryScreen');
  };

  return (
    <KeyboardControl>
      <View style={Styles.box}>
        {!!error && ( <Subheading style = {{color:"red",textAlign:"center",marginBottom:50}}>{error}</Subheading>)}
        <View style={Styles.main}>
          <Ionicons name="heart" color={'red'} size={55} />
        </View>

        <View>
          <Text style={Styles.case}>Hesap Oluştur</Text>
        </View>

        <Text style={Styles.text}>
          E-posta adresine doğrulama linki göndereceğiz.
        </Text>

        <Text style={Styles.text}>
          Lütfen geçerli bir e-posta adresi yazdığından emin ol!
        </Text>

        <View style={Styles.other}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={Styles.mains}>
          
 {/* HESAP OLUŞTUR DİZAYNI VE BİLGİLERİ */}
            



            <TextInput
              style={Styles.gearinput}
              placeholder="Kullanıcı Adı"
              onChangeText={text => setName(text)}
              value={name}
            />


            <TextInput
              style={Styles.gearinput}
              placeholder="E-mail"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              value={email}
            />

            <TextInput
              style={Styles.gearinput}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />


            <View style={Styles.pass}>
              <PasswordStrengthMeterBar password={password} />
            </View>

            <TouchableOpacity
              style={Styles.recordinput}
              onPress={NewRecord}>
              <Text style={{marginLeft:15, marginTop: 13}}>

                 Kayıt Ol

              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Styles.viewflex}>
            <Text style={Styles.textnone}>
              E-Posta Adresin Profilinde Gösterilmez.
            </Text>
          </View>

          <View style={Styles.mains}>
            <TouchableOpacity onPress={handleNavigate}>
              <View style={Styles.icon}>
                <Ionicons
                  name="arrow-forward-outline"
                  color={'red'}
                  size={50}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardControl>
  );
}

const Styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 5,
    width: wp(65),
    height: hp(5),
    top: 30,
    paddingLeft: 17,
  },

  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  case: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },

  other: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,

  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    left: 10,
  },

  main: {
    marginVertical: 25,
    flexDirection: 'column',
    flex: 0.5,
  },

  mains: {
    flex: 2,
  },
  textnone: {
    left: 30,
    top: 15,
    fontSize: 15,
  },
  viewflex: {
    flex: 6,
  },
  pass: {
    top: 25,
    width: wp(65),
    height: hp(3),
    borderRadius: 5,
  },
  gearinput : {

          width: wp(69),
          height: hp(6),
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 1,
          fontSize: 14,
          borderColor:"gray",
          top:20
  },

  recordinput : {
                marginTop: 25,
                marginLeft: 100,
                width: wp(20),
                height: hp(6),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
  },
});
