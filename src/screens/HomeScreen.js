import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ImageList from '../components/ImageList';
import Title from '../elements/Header';


class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Text>記録一覧</Text>
        <ImageList />
      </View>
    )
  }
}

export default HomeScreen;
