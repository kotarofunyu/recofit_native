import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RecordItems from '../components/RecordItems';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Heading name="記録一覧" />
        <RecordItems getUrl="https://recofit.jp/api/training_record" />
      </View>
    );
  }
}

export default HomeScreen;
