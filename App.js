import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import UserScreen from './src/screens/UserScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

export default function App() {
  const MainNavigator = createAppContainer(
    createSwitchNavigator({
      login: {screen: LoginScreen},
      main: {screen: MainScreen},
    }),
  );

  return (
    <NavigationContainer>
      <MainNavigator />
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
        <Tab.Screen name="メイン" component={MainScreen} />
        <Tab.Screen name="ホーム" component={HomeScreen} />
        <Tab.Screen name="種目" component={EventScreen} />
        <Tab.Screen name="ユーザー" component={UserScreen} />
        <Tab.Screen name="ログイン" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
