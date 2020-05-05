import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

class UserScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Heading name="ユーザー" />
        <Text>
          ユーザー一覧
        </Text>
      </View>
    )
  }
}

export default UserScreen;
