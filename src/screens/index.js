import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import DetailScreen from './EventScreen';
import UserScreen from './UserScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

export default MainScreenNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    User: {screen: UserScreen},
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => props.navigation.navigate('TabOne')}>
              <Icon name="home" />
              <Text>タブその１</Text>
            </Button>
            <Button
              vertical
              onPress={() => props.navigation.navigate('TabTwo')}>
              <Icon name="camera" />
              <Text>タブその２</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  },
);
