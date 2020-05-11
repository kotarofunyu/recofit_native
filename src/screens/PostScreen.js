import React, {Component} from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiToken: 'Zj2bVMdX9kc3xjn5SjgE5hko',
      comment: 'from react native',
      eventData: [
        {
          name: 'ベンチプレス ',
          setData: [
            {
              weight: '50',
              rep: '10',
              set: '2',
              renewal: null,
              main: null,
            },
          ],
        },
      ],
    };
  }

  // async componetDidMout() {
  //   this.setState({
  //     apiToken: await AsyncStorage.getItem('api_token'),
  //   });
  // }

  submitCreatePost() {
    fetch('http://localhost/api/training_record/', {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        training_record: {
          comment: this.state.comment,
          event_attributes: [
            {
              name: this.state.eventData[0].name,
              set_datum_attributes: [
                {
                  weight: this.state.eventData[0].setData[0].weight,
                  rep: this.state.eventData[0].setData[0].rep,
                  set: this.state.eventData[0].setData[0].set,
                },
              ],
            },
          ],
        },
        api_token: this.state.apiToken,
      }),
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          comment: '',
        });
      });
  }

  render() {
    return (
      <View>
        <Title />
        <Heading name="記録する" />
        <Text>{this.state.apiToken}</Text>
        <View>
          <TextInput
            placeholder="今日のトレーニングはどうだった？"
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            style={styles.textArea}
          />
        </View>
        <View>
          <View style={styles.eventArea}>
            <TextInput
              placeholder="種目名"
              value={this.state.eventData[0].name}
              onChangeText={name => this.setState({name})}
            />
          </View>
          <View style={styles.setArea}>
            <TextInput
              placeholder="重量kg"
              value={this.state.eventData[0].setData[0].weight}
            />
            <TextInput
              placeholder="回数rep"
              value={this.state.eventData[0].setData[0].rep}
            />
            <TextInput
              placeholder="セット"
              value={this.state.eventData[0].setData[0].set}
            />
          </View>
        </View>
        <View>
          <Button
            title="記録する"
            onPress={() => {
              this.submitCreatePost();
            }}
          />
        </View>
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
