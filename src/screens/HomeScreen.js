import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RecordItems from '../components/RecordItemsver';
// import RecordItems from '../components/RecordItems';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <Heading name="記録一覧" />
        <Button
          title="Let's Record!"
          onPress={() => this.props.navigation.navigate('Post')}
        />
        <RecordItems
          navigation={this.props.navigation}
          getUrl="https://recofit.jp/api/training_record"
        />
      </View>
    );
  }
}

export default HomeScreen;
