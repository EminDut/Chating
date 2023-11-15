import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {
  Avatar,
  List,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
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
  
    // Kullanıcının var olup olmadığını kontrol etmek için kullanıyorum..
    const userSnapshot = await firebase
      .firestore()
      .collection('chats')
      .where('users', 'array-contains', userEmail.toLowerCase()) // Küçük harfe dönüştürülmüş haliyle kontrol et
      .get();
  
    if (userSnapshot.empty) {
      setIsLoading(false);
      Alert.alert('User not found (: ');
      return;
    }
  
    // Kullanıcının zaten var olan bir sohbeti var mı kontrol et
    const existingChat = await firebase
      .firestore()
      .collection('chats')
      .where('users', '==', [email.toLowerCase(), userEmail.toLowerCase()]) // Küçük harfe dönüştürülmüş haliyle kontrol et
      .get();
  
    if (!existingChat.empty) {
      setIsLoading(false);
      Alert.alert('Chat already exists (: ');
      return;
    }
  
    setIsLoading(true);
  
    const response = await firebase
      .firestore()
      .collection('chats')
      .add({
        users: [email.toLowerCase(), userEmail.toLowerCase()], // Küçük harfe dönüştürülmüş haliyle ekle
      });
  
    setIsLoading(false);
    setIsDialogVisible(false);
  
    navigation.navigate('Chat', { chatId: response.id });
  };
  

  const deleteChat = async (chatId) => {
    try {
      await firebase.firestore().doc(`chats/${chatId}`).delete();
    } catch (error) {
      console.error('Error deleting chat:', error);
      Alert.alert('Error', 'An error occurred while deleting the chat');
    }
  };

  
  return (
    <View style={{flex: 1}}>
      {chats.map(chat => (
        <React.Fragment key={chat.id}>
          <List.Item
            title={chat.data().users.find(x => x !== email)}
            description={(chat.data().messages ?? [])[0]?.text ?? ''}
            left={() => (
              <Avatar.Text
                label={(chat.data().users.find(x => x !== email) || '')
                  .split(' ')
                  .reduce((prev, current) => prev + current[0], '')}
                size={56}
                left={10}
              />
            )}
            onPress={() => navigation.navigate('Chat', {chatId: chat.id})}
            onLongPress={() => {
              Alert.alert(
                'Delete Chat',
                'Are you sure you want to delete this chat?',
                [
                  {text: 'Cancel', style: 'cancel'},
                  {
                    text: 'Delete',
                    onPress: () => deleteChat(chat.id),
                    style: 'destructive',
                  },
                ]
              );
            }}
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
        style={{position: 'absolute', right: 16, bottom: 16}}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
