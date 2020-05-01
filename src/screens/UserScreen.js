import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Title from '../elements/Header';

class UserScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Text>
          ユーザー一覧
        </Text>
      </View>
    )
  }
}

export default UserScreen;
