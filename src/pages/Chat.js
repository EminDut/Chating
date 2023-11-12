import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import { GiftedChat } from 'react-native-gifted-chat';
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

  return (
    <View style={{ flex: 1 }}>
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
      />
      <KeyboardAvoidingView behavior="padding" />
    </View>
  );
};

export default Chat;
