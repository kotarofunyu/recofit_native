import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage, ScrollView} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';
import {FlatList} from 'react-native-gesture-handler';
import RecordIndex from '../components/RecordIndex';

class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      tasks: [],
      records: [],
      loading: '',
      apiToken: '',
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
      apiToken: await AsyncStorage.getItem('api_token'),
    });
    fetch(`http://localhost/api/user/${this.state.apiToken}`)
      .then(response => response.json())
      .then(jsonData => this.setState({loading: false, tasks: jsonData}))
      .catch(error => console.error(error));
    this.setState({
      loadgin: true,
      apiToken: await AsyncStorage.getItem('api_token'),
    });
    fetch(`http://localhost/api/user_record/${this.state.apiToken}`)
      .then(response => response.json())
      .then(recordsData =>
        this.setState({loading: false, records: recordsData}),
      )
      .catch(error => console.error(error));
  }

  renderRecords() {
    return this.state.records.map(data => {
      return <RecordIndex key={data.id} imageInfo={data} />;
    });
  }

  render() {
    return (
      <View>
        <Title />
        <Heading name="ログイン中のユーザー" />
        <View>
          <Text>{this.state.tasks.name}</Text>
          <Text>{this.state.tasks.introduction}</Text>
        </View>
        <ScrollView>{this.renderRecords()}</ScrollView>
      </View>
    );
  }
}

export default UserScreen;
