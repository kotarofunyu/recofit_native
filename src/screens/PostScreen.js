import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'aaaaa',
      eventData: [
        {
          name: '',
          setData: {
            weight: '20',
            rep: '11',
            set: '0',
            renewal: null,
            main: null,
          },
        },
      ],
    };
  }
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
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            style={styles.textArea}
          />
        </View>
        <View>
          <View style={styles.setArea}>
            <TextInput
              placeholder="重量kg"
              value={this.state.eventData[0].weight}
            />
            <TextInput
              placeholder="回数rep"
              value={this.state.eventData[0].rep}
            />
            <TextInput
              placeholder="セット"
              value={this.state.eventData[0].set}
            />
          </View>
        </View>
        <View>
          <Text>種目を追加</Text>
        </View>
        <View>{this.submitButton}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    height: 50,
    backgroundColor: '#308EEF',
    margin: 10,
  },
  setArea: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
