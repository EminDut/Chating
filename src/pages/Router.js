import {KeyboardAvoidingView} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Provider} from 'react-native-paper';
import { GlobalProvider } from './GlobalContext'; // Yeni eklenen import


import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ChatList from './ChatList';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import TermScreen from './TermScreen';
import PrivacyScreen from './PrivacyScreen';
import NewAccoundTryScreen from './NewAccoundTryScreen';
import NewRecord from '../Inputs/NewRecord';
import Chat from './Chat';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
 

  return (
    <GlobalProvider>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <NavigationContainer>
        <Provider>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="TermScreen" component={TermScreen} />
            <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="NewAccoundTryScreen" component={NewAccoundTryScreen}
            />
            <Stack.Screen name="NewRecord" component={NewRecord} />

            <Stack.Screen name="HomeScreen">
              {() => (
                <Tab.Navigator screenOptions={{headerShown: false}}>
                  <Tab.Screen
                    name="Home"
                    options={{
                      //İCONLARIN İSMİNİ BURADAN DEĞİŞTİR !!!
                      tabBarLabel: 'Home',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="home"
                          color={'tomato'}
                          size={size}
                        />
                      ),
                    }}
                    component={HomeScreen}
                  />
                  <Tab.Screen
                    name="ChatList"
                    options={{
                      tabBarLabel: 'Message',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="chat"
                          color={'tomato'}
                          size={size}
                        />
                      ),
                    }}
                    component={ChatList}
                  />
                  <Tab.Screen
                    name="Profile"
                    options={{
                      tabBarLabel: 'Profil',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="account-circle"
                          color={'tomato'}
                          size={size}
                        />
                      ),
                    }}
                    component={ProfileScreen}
                  />
                  <Tab.Screen
                    name="Settings"
                    options={{
                      tabBarLabel: 'Settings',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="cogs"
                          color={'tomato'}
                          size={size}
                        />
                      ),
                    }}
                    component={SettingsScreen}
                  />
                </Tab.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </KeyboardAvoidingView>
    </GlobalProvider>

  );
};

export default Router;
