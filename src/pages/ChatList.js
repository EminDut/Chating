import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setEmail(user?.email ?? '');
    });
  }, []);

  const [isLoading, SetIsLoading] = useState(false);

  const navigation = useNavigation();

  const createChat = async () => {
    if (!email || !userEmail) return;
    SetIsLoading(true);

  const response = await firebase
      .firestore()
      .collection('chats')
      .add({
        users: [email, userEmail],
      });

    SetIsLoading(false);
    setIsDialogVisible(false);
    
    navigation.navigate('Chat',{ chatId: response.id });
  };

  const [chats, setChats] = useState([]);

  useEffect(() => {
    return firebase
      .firestore()
      .collection('chats')
      .where('users', 'array-contains', email)
      .onSnapshot(querySnapshot => {
        setChats(querySnapshot.docs);
      });
  }, [email]);

  return (
    <View style={{flex: 1}}>
      {chats.map(chat => (
        <React.Fragment>
          <List.Item
            title={chat.data().users.find(x => x !== email)}
            description={(chat.data().messages ?? [] ) [0]?.text ?? undefined }
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
            onPress={() => navigation.navigate("Chat",{chatId:chat.id})}
          />
          <Divider inset={true} />
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
              SAVE
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 13,
//   },
//   resultItem: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//   },
// });

export default ChatList;
