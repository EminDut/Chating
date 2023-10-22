import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet,KeyboardAvoidingView} from 'react-native';
import KeyboardControl from "../Inputs/KeyboardControl"

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Arama işlemleri
    // searchQuery değerini kullanarak Instagram API'sine istek gönderebilir ve sonuçları alabilirsiniz
    // setSearchResults fonksiyonuyla, API'den gelen sonuçları searchResults state'ine atayabilirsiniz
  };

  return (

    <KeyboardControl>
        <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1}}>
    <View style={styles.container}>

   
      <TextInput
        placeholder="Kullanıcı ara..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.username}</Text>
          </View>
        )}
      />
    </View>

    <View
    style={{flex:1, backgroundColor:"red", borderRadius:99}}>

    </View>
    <View></View>
    <View></View>
    <View></View>
    <View></View>
    </KeyboardAvoidingView>
    </KeyboardControl>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:13

  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default SearchScreen;