import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

export default class PostScreen extends React.Component {
  submitButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    } else {
      return (
        <Button
          title="記録する"
          onPress={() => {
            this.onSubmit();
          }}
        />
      );
    }
  }
  render() {
    return (
      <View>
        <Title />
        <Heading name="記録する" />
        <View>
          <TextInput
            placeholder="今日のトレーニングはどうだった？"
            onChangeText={comment => this.setState({comment})}
          />
        </View>
        <View>
          <Text>種目を追加</Text>
        </View>
        <View>{this.submitButton}</View>
      </View>
    );
  }
}
