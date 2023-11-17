import React, {useState} from 'react';
import {View, Button, Image, Alert} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const ProfileScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImageUpload = async () => {

    try {

      // İzin kontrolü

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

      // Resim seçme işlemi
      const imagePickerResult = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Resmi Firebase Storage'a yükleme
      const reference = storage().ref(`images/${imagePickerResult.path}`);

      await reference.putFile(imagePickerResult.path);

      // Yükleme tamamlandığında indirme URL'sini al
      const downloadURL = await reference.getDownloadURL();

      // State'i güncelle
      setImageUri(downloadURL);

      // Başarı mesajı
      Alert.alert('Success', 'Image uploaded successfully!');
    } catch (error) {
      console.error('Upload Image Error:', error);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };

  return (
    <View>
      {imageUri && (
        <Image source={{uri: imageUri}} style={{width: 200, height: 200}} /> )}
      <Button title="Upload Image" onPress={handleImageUpload} />
    </View>
  );
};

export default ProfileScreen;
