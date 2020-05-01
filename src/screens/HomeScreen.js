import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RecordItems from '../components/RecordItems';
import Title from '../elements/Header';


class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Text>記録一覧</Text>
        <RecordItems />
      </View>
    )
  }
}

export default HomeScreen;
