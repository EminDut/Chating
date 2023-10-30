import React, {useState} from 'react';
import {View} from 'react-native';
import { Avatar, List, Divider,FAB,Portal,Dialog,Button,TextInput, } from 'react-native-paper';
import KeyboardControl from '../Inputs/KeyboardControl';

const ChatList = () => {

  const [isDialogVisible, setİsDialogVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <List.Item
        title="user name"
        description="hi i will be waiting for you"
        left={() => <Avatar.Text label="HG" size={56} left={10} />}
      />
      <Divider inset={true} />

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setİsDialogVisible(false)}>
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label={'Enter user e-mail'}></TextInput>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => setİsDialogVisible(false)}>CANCEL</Button>
            <Button>SAVE</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        icon="plus"
        style={{position: 'absolute', right: 16, bottom: 16}}
        onPress={() => setİsDialogVisible(true)}
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
