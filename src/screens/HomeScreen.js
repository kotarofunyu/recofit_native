import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ImageList from '../components/ImageList';


class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ImageList />
      </View>
    )
  }
}

export default HomeScreen;
