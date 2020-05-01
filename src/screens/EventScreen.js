import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Title from '../elements/Header';

class EventScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Text>
        種目一覧
        </Text>
      </View>
    )
  }
}

export default EventScreen;
