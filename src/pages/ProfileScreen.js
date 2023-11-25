import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableOpacity, Image, Modal, TextInput, ScrollView, Text } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import ImagePicker from 'react-native-image-crop-picker';
import { Avatar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from "@react-native-firebase/firestore";

import { useGlobalContext } from './GlobalContext'; // Bağlamı içeri aktarın




const ProfileScreen = () => {


  const { profileImage, updateProfileImage } = useGlobalContext();

  const [imageUri, setImageUri] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [editingField, setEditingField] = useState('');
  const [tempValue, setTempValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(null);



  const handleImageUpload = async (selectedImage) => {
    try {
      const reference = storage().ref(`images/${selectedImage.path}`);
      await reference.putFile(selectedImage.path);
      const downloadURL = await reference.getDownloadURL();
      await auth().currentUser.updateProfile({
        photoURL: downloadURL,
      });
      setImageUri(downloadURL);
      Alert.alert('Success', 'Image uploaded successfully!');

      // Firestore'daki tüm kullanıcıların profil fotoğrafını güncelle
      const allUsers = await firestore().collection('chats').get();
      allUsers.forEach(async (userDoc) => {
        const userId = userDoc.id;
        await firestore().collection('chats').doc(userId).update({
          profileImage: downloadURL,
        });
      });

      // Profil resmini bağlamdaki fonksiyon aracılığıyla güncelle
      updateProfileImage(downloadURL);
    } catch (error) {
      console.error('Upload Image Error:', error);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };



  const handleImagePress = async () => {
    try {
      const permissionResult = await check(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      if (permissionResult === RESULTS.DENIED) {
        const newPermissionResult = await request(
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        );
        if (newPermissionResult !== RESULTS.GRANTED) {
          throw new Error('Permission denied');
        }
      }

      const imagePickerResult = await new Promise((resolve, reject) => {
        Alert.alert(
          'Select Image Source',
          'Choose the source of your image :)',
          [
            {
              text: 'Gallery',
              onPress: async () => {
                try {
                  const result = await ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                  });
                  resolve(result);
                } catch (error) {
                  reject(error);
                }
              },
            },
            {
              text: 'Camera',
              onPress: async () => {
                try {
                  const result = await ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                  });
                  resolve(result);
                } catch (error) {
                  reject(error);
                }
              },
            },
            {
              text: 'Cancel',
            },
          ],
          { cancelable: false },
        );
      });

      if (imagePickerResult.cancelled) {
        console.log('Image selection cancelled', imagePickerResult);
        return;
      }

      handleImageUpload(imagePickerResult);
    } catch (error) {
      if (
        error.message !== 'Permission denied' &&
        !error.message.includes('User cancelled image selection')
      ) {
        console.error('Upload Image Error:', error);
        Alert.alert('Error', 'Failed to upload image.');
      }
    }
  };

  const handleSaveProfile = async () => {
    try {
      // Sadece Firebase üzerinde güncellenen bilgileri kaydet
      await auth().currentUser.updateProfile({
        displayName: name,
      });
      Alert.alert('Success', 'Profile saved successfully!');
    } catch (error) {
      console.error('Save Profile Error:', error);
      Alert.alert('Error', 'Failed to save profile.');
    }
  };
  

  const handleEditField = field => {
    setEditingField(field);
    setTempValue(
      field === 'name' ? name : field === 'about' ? about : phone,
    );
    setModalVisible(true);
  };


  const handleSaveTempProfile = async () => {
    try {
      switch (editingField) {
        case 'name':
          // Kullanıcı adı güncellendiğinde auth() üzerinde güncelliyoruz
          await auth().currentUser.updateProfile({
            displayName: tempValue,
          });
          setName(tempValue);
          break;
        case 'about':
          // 'about' alanını güncelliyoruz ve Firestore'da saklıyoruz
          await firestore().collection('chats').doc(auth().currentUser.uid).update({
            about: tempValue,
          });
          setAbout(tempValue);
          break;
        case 'phone':
          // 'phone' alanını güncelliyoruz ve Firestore'da saklıyoruz
          await firestore().collection('chats').doc(auth().currentUser.uid).update({
            phone: tempValue,
          });
          setPhone(tempValue);
          break;
        default:
          break;
      }
      setModalVisible(false);
    } catch (error) {
      console.error('Save Temp Profile Error:', error);
      Alert.alert('Error', 'Failed to save profile.');
    }
  };
  

  

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        setImageUri(user.photoURL);
        setName(user.displayName || '');

        try {
          const userDoc = await firestore()
            .collection('chats')
            .doc(user.uid)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data();
            console.log('Kullanıcı Verisi:', userData);
            setAbout(userData.about || '');
            setPhone(userData.phone || '');
          } else {
            console.log('Kullanıcı belgesi mevcut değil.');

            // Kullanıcı belgesi yoksa, belgeyi oluştur
            await firestore().collection('chats').doc(user.uid).set({
              about: 'Bilgi yok',
              phone: 'Telefon yok',
            });

            console.log('Kullanıcı belgesi oluşturuldu.');
          }
        } catch (error) {
          console.error('Firestore Hatası:', error);
        }
      } else {
        console.log('Kullanıcı girişi yapılmamış.');
      }

      // setUser fonksiyonu kullanıcıyı güncelle
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 80 }}>
      <TouchableOpacity
        onPress={() => setShowFullImage(true)}
        accessibilityLabel="Profil Resmini Değiştir.">
        <Avatar.Image
          size={200}
          source={
            imageUri
              ? { uri: imageUri }
              : require('../assets/dk2.jpg')
          }
        />
        <View
          style={{
            position: 'absolute',
            marginTop: 170,
            left: 145,
          }}>
          <Icon
            name="camera"
            size={35}
            color="tomato"
            onPress={handleImagePress}
          />
        </View>
      </TouchableOpacity>

      <Modal visible={showFullImage} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setShowFullImage(false)}>
            <Image
              style={{
                width: 500,
                height: 500,
                resizeMode: 'contain',
                marginBottom: 200,
              }}
              source={
                imageUri
                  ? { uri: imageUri }
                  : require('../assets/dk2.jpg')
              }
            />
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView style={{ marginVertical: 20, width: '80%' }}>
        <ProfileField
          icon="user"
          color="blue"
          placeholder="Adınız"
          value={name}
          onEdit={() => handleEditField('name')}
        />
        <ProfileField
          icon="info-circle"
          color="orange"
          placeholder="Hakkında"
          value={about}
          onEdit={() => handleEditField('about')}
        />
        <ProfileField
          icon="phone"
          color="purple"
          placeholder="Telefon"
          value={phone}
          onEdit={() => handleEditField('phone')}
        />
      </ScrollView>

      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Bilgileri Düzenle
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 10,
                padding: 10,
              }}
              placeholder={
                editingField === 'name'
                  ? 'Adınız'
                  : editingField === 'about'
                  ? 'Hakkında'
                  : 'Telefon'
              }
              value={tempValue}
              onChangeText={text => setTempValue(text)}
            />
            <Button
              mode="contained"
              onPress={handleSaveTempProfile}
              style={{ marginTop: 10 }}>
              Kaydet
            </Button>
            <Button
              mode="outlined"
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 10 }}>
              İptal
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ProfileField = ({ icon, color, placeholder, value, onEdit }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    }}>
    <Icon
      name={icon}
      size={20}
      color={color}
      style={{ marginRight: 10, marginTop: 20 }}
    />
    <TouchableOpacity onPress={onEdit} style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
        }}>
        <Text style={{ marginBottom: 5 }}>{placeholder}</Text>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: 'gray',
            color: 'black',
            borderBottomWidth: 1,
            padding: 10,
            width: 275,
          }}
          placeholder={value}
          value={value}
          editable={false}
        />
      </View>
    </TouchableOpacity>
    <Icon
      name="edit"
      size={20}
      color="green"
      onPress={onEdit}
      style={{ marginLeft: 10, marginTop: 25 }}
    />
  </View>
);

export default ProfileScreen;
