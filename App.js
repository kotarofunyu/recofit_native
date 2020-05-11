import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import UserScreen from './src/screens/UserScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostScreen from './src/screens/PostScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import RecordScreen from './src/screens/RecordScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
Ionicons.loadFont();

const HomeStack = createStackNavigator();

const UserStack = createStackNavigator();

const RecordStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Post" component={PostScreen} />
      <RecordStack.Screen name="RecordDetail" component={RecordScreen} />
    </HomeStack.Navigator>
  );
}

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
      <RecordStack.Screen name="RecordDetail" component={RecordScreen} />
      <UserStack.Screen name="Logout" component={MainScreen} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'ホーム') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === '種目') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'ユーザー') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffa500',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="ホーム" component={HomeStackScreen} />
        <Tab.Screen name="種目" component={EventScreen} />
        <Tab.Screen name="ユーザー" component={UserStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
