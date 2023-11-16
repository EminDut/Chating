import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Alert, ImageBackground,Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import { GiftedChat,} from 'react-native-gifted-chat';
import KeyboardControl from '../Inputs/KeyboardControl';



const Chat = () => {

  const route = useRoute();

  const [messages, setMessages] = useState([]);
  const [uid, setUID] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUID(user?.uid);
      setName(user?.displayName);
    });
  }, []);

  useEffect(() => {
    return firebase
      .firestore()
      .doc('chats/' + route.params.chatId)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.data()?.messages ?? []);
      });
  }, [route.params.chatId]);

  const onSend = (newMessages = []) => {
    firebase
      .firestore()
      .doc('chats/' + route.params.chatId)
      .set(
        {
          messages: GiftedChat.append(messages, newMessages),
        },
        { merge: true }
      );
  };

  const deleteMessage = async (messageId) => {
  try {
    await firebase
      .firestore()
      .doc('chats/' + route.params.chatId)
      .update({
        messages: firebase.firestore.FieldValue.arrayRemove(
          messages.find((message) => message._id === messageId)
        ),
      });
  } catch (error) {
    console.error('Error deleting message:', error);
    Alert.alert('Error', 'An error occurred while deleting the message');
  }
  
};

  return (

    <KeyboardControl>
      <ImageBackground
        source={require('../assets/dk2.jpg')}  style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ flex: 0.91 }}>
        <GiftedChat
          messages={messages.map((x) => ({
            ...x,
            _id: x._id || Math.round(Math.random() * 1000000),
            createdAt: x.createdAt?.toDate(),
          }))}
          onSend={(newMessages) => onSend(newMessages)}
          user={{
            _id: uid,
            name: name,
          }}
          onLongPress={(context, message) => {
            if (message.user._id === uid) {
              Alert.alert(
                'Delete Message',
                'Are you sure you want to delete this message?',
                [
                  { text: 'Cancel', style: 'cancel' },
                  {
                    text: 'Delete',
                    onPress: () => deleteMessage(message._id),
                    style: 'destructive',
                  },
                ]
              );
            }
          }}
        />
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            style={{ flex: 1 }}
          />
        ) : null}
        
      </View>
      </ImageBackground>
    </KeyboardControl>
  );
};

export default Chat;
