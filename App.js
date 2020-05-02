import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import UserScreen from './src/screens/UserScreen';
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'ホーム') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
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
        <Tab.Screen name="ホーム" component={HomeScreen} />
        <Tab.Screen name="種目" component={EventScreen} />
        <Tab.Screen name="ユーザー" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
