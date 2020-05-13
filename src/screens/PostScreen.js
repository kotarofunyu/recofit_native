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
import EventForm from '../components/EventForm';

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiToken: '',
      comment: '',
      name: '',
      weight: '',
      rep: '',
      set: '',
      main: null,
      renewal: null,
      event_attributes: [],
    };
  }

  async componentDidMount() {
    this.setState({
      apiToken: await AsyncStorage.getItem('api_token'),
    });
  }

  addChild() {
    let increment = 0;
    // this.state.items[0].name.push(this.state.tests);
    // this.setState({items: {name: this.state.tests}});
    // this.setState({teststorage: [{name: this.state.tests}]});
    this.state.teststorage.push({name: this.state.tests, setData: []});
    // this.state.items[0].name.push(this.state.tests);
    // this.state.teststorage.push(this.state.tests);
    this.setState({tests: ''});
    increment += 1;
  }

  addGrandChild() {
    this.state.teststorage.setData[0].push({weight: '80', rep: '10', set: '3'});
  }

  addChilds() {
    this.state.event_attributes.push({
      name: this.state.name,
      set_datum_attributes: [
        {weight: this.state.weight, rep: this.state.rep, set: this.state.set},
      ],
    });
    this.setState({name: '', weight: '', rep: '', set: ''});
  }

  submitCreatePost() {
    fetch('https://recofit.jp/api/training_record/', {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        training_record: {
          comment: this.state.comment,
          event_attributes: this.state.event_attributes,
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
        <View>
          <TextInput
            placeholder="今日のトレーニングはどうだった？"
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            style={styles.textArea}
          />
        </View>
        <View>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({name})}
            placeholder="種目名"
          />
          <TextInput
            value={this.state.weight}
            onChangeText={weight => this.setState({weight})}
            placeholder="重量kg"
          />
          <TextInput
            value={this.state.rep}
            onChangeText={rep => this.setState({rep})}
            placeholder="レップ"
          />
          <TextInput
            value={this.state.set}
            onChangeText={set => this.setState({set})}
            placeholder="セット"
          />
          <Button
            onPress={() => {
              this.addChilds();
            }}
            title="+データ登録"
          />
        </View>
        <Text>{this.state.tests}</Text>
        <Text>{JSON.stringify(this.state)}</Text>
        <View>
          <Button
            title="記録する"
            onPress={() => {
              this.submitCreatePost();
              this.props.navigation.goBack();
            }}
          />
        </View>
        <View>
          <Text>{this.state.comment}</Text>
          {this.state.event_attributes.map(item => {
            return (
              <View>
                <Text>{item.name}</Text>
                {item.set_datum_attributes.map(setData => {
                  return (
                    <View>
                      <Text>{setData.weight}</Text>
                      <Text>{setData.rep}</Text>
                      <Text>{setData.set}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
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
