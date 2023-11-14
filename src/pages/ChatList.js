import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Avatar, List, Divider, FAB, Portal, Dialog, Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setEmail(user?.email ?? '');
    });
  }, []);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('chats')
      .where('users', 'array-contains', email)
      .onSnapshot(querySnapshot => {
        setChats(querySnapshot.docs);
      });

    return () => unsubscribe();
  }, [email]);

  const createChat = async () => {
    if (!email || !userEmail) return;

    // Kullanıcının var olup olmadığını kontrol et
    const userSnapshot = await firebase.firestore().collection('chats').where('users', 'array-contains', userEmail).get();

    if (userSnapshot.empty) {

      setIsLoading(false);
      Alert.alert('User not found (: ');
      return;
    }

    setIsLoading(true);

    const response = await firebase
      .firestore()
      .collection('chats')
      .add({
        users: [email, userEmail],
      });

    setIsLoading(false);
    setIsDialogVisible(false);

    navigation.navigate('Chat', { chatId: response.id });
  };

  return (
    <View style={{ flex: 1 }}>
      {chats.map(chat => (
        <React.Fragment key={chat.id}>
          <List.Item
            title={chat.data().users.find(x => x !== email)}
            description={(chat.data().messages ?? [])[0]?.text ?? ''}
            left={() => (
              <Avatar.Text
                label={chat
                  .data()
                  .users.find(x => x !== email)
                  .split(' ')
                  .reduce((prev, current) => prev + current[0], '')}
                size={56}
                left={10}
              />
            )}
            onPress={() => navigation.navigate('Chat', { chatId: chat.id })}
          />
          <Divider inset={true} key={`divider-${chat.id}`} />
        </React.Fragment>
      ))}

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}>
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label={'Enter user e-mail'}
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>CANCEL</Button>
            <Button onPress={() => createChat()} loading={isLoading}>
              ADD
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        icon="plus"
        style={{ position: 'absolute', right: 16, bottom: 16 }}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
