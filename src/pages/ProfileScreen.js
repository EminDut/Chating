import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import ImageCropPicker from 'react-native-image-crop-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const logoImg = require('../assets/emin.jpg');

function ProfileScreen() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setSelectedImage(image.path);
      // Seçilen fotoğrafın yüklenmesi için Firebase Storage'a gönderme işlemini burada gerçekleştirebilirsiniz.
      // image.path değeri seçilen fotoğrafın yerel yolunu temsil eder.
      // Firebase Storage SDK'sını kullanarak fotoğrafı yüklemek için uygun yöntemleri çağırabilirsiniz.
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };

  const handleCameraCapture = async () => {
    try {
      const cameraPermissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      if (cameraPermissionStatus === RESULTS.DENIED) {
        const permissionRequestResult = await request(PERMISSIONS.ANDROID.CAMERA);
        if (permissionRequestResult === RESULTS.GRANTED) {
          openCamera();
        }
      } else if (cameraPermissionStatus === RESULTS.GRANTED) {
        openCamera();
      }
    } catch (error) {
      console.log('CameraCapture Error: ', error);
      Alert.alert("Kamera Hatası" , "kamera açılma işlemi sırasında bir hata oluştu.");
    }
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setSelectedImage(image.path);
      // Çekilen fotoğrafın yüklenmesi için Firebase Storage'a gönderme işlemini burada gerçekleştirebilirsiniz.
      // image.path değeri çekilen fotoğrafın yerel yolunu temsil eder.
      // Firebase Storage SDK'sını kullanarak fotoğrafı yüklemek için uygun yöntemleri çağırabilirsiniz.
    }).catch((error) => {
      console.log('CameraCapture Error: ', error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={selectedImage ? { uri: selectedImage } : logoImg} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder="Emin_Ex" style={styles.textInput} />

        <TouchableOpacity onPress={handleImageUpload}>
          <Ionicons name="images" size={50} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCameraCapture}>
          <Ionicons name="camera" size={50} color="black" />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="heart" color="red" size={25} />
            <TextInput style={styles.infoText} placeholder="Beğeni: 500" />
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="person-sharp" color="black" size={25} />
            <TextInput style={styles.infoText} placeholder="Takipçi: 254" />
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="person-add-sharp" color="black" size={25} />
            <TextInput style={styles.infoText} placeholder="Takip Edilen" />
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="logo-mastodon" color="black" size={25} />
            <TextInput style={styles.infoText} placeholder="Mesaj" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor:"cornsilk",
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 2,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: "white",
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
  },
});

export default ProfileScreen;