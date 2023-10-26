import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCropPicker from 'react-native-image-crop-picker';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import storage from '@react-native-firebase/storage';

function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      setSelectedImage(image.path);

      const reference = storage().ref(`images/${Date.now()}.jpg`);
      await reference.putFile(image.path);
      console.log('Fotoğraf yüklendi:', reference);

      const downloadURL = await reference.getDownloadURL();
      console.log('Download URL:', downloadURL);
    } catch (error) {
      console.log('Image Upload Error: ', error);
    }
  };

  const handleCameraCapture = async () => {
    try {
      const cameraPermissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

      if (cameraPermissionStatus === RESULTS.DENIED) {
        const permissionRequestResult = await request(
          PERMISSIONS.ANDROID.CAMERA,
        );

        if (permissionRequestResult === RESULTS.GRANTED) {
          openCamera();
        }
      } else if (cameraPermissionStatus === RESULTS.GRANTED) {
        openCamera();
      }
    } catch (error) {
      console.log('CameraCapture Error: ', error);
      Alert.alert(
        'Kamera Hatası',
        'Kamera açılma işlemi sırasında bir hata oluştu.',
      );
    }
  };

  const openCamera = async () => {
    try {
      const image = await ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });

      setSelectedImage(image.path);

      const reference = storage().ref(`images/${Date.now()}.jpg`);
      await reference.putFile(image.path);
      console.log('Fotoğraf yüklendi:', reference);

      const downloadURL = await reference.getDownloadURL();
      console.log('Download URL:', downloadURL);
    } catch (error) {
      console.log('CameraCapture Error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {selectedImage ? ( <Image source={{uri: selectedImage}} style={styles.image} />) : ( <Text> No Image Selected </Text>)}
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>Emin_Ex</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleImageUpload}>
              <Ionicons name="images" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCameraCapture}
              style={styles.cameraButton}>
              <Ionicons name="camera" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
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
    width: 420,
    height: 420,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'cornsilk',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    left:20
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 100,
    height: 50,
    right:30
  },
  cameraButton: {
    marginLeft: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
