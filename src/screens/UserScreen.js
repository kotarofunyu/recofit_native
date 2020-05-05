import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';
import { FlatList } from 'react-native-gesture-handler';


class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks:[], loading: '', apiToken: ''};
  }

  async componentDidMount() {
    this.setState({ loading: true, apiToken: await AsyncStorage.getItem('api_token') })
    fetch(`http://localhost/api/user/${this.state.apiToken}`)
    .then((response) => response.json())
    .then((jsonData) => (this.setState({ loading: false, tasks: jsonData })))
    .catch((error) => console.error(error));
  }

  // renderTasks() {
  //   if (this.state.loading) return <FlatList />
  //   else {
  //     return (
  //       <FlatList
  //       data={this.state.tasks}
  //       keyExtractor={(item) => item.id.toString()}
  //       renderItem={({item}) => (
  //         <CheckBox title={item.name} 
  //       )}
  //     )
  //   }
  // }

  render() {
    return (
      <View>
        <Title />
        <Heading name="ログイン中のユーザー" />
        <Text>
          { this.state.tasks.name }
        </Text>
        <Text>
          { this.state.tasks.introduction }
        </Text>
      </View>
    )
  }
}

export default UserScreen;
