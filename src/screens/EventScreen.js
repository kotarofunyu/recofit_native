// export default EventScreen;
import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage, ScrollView} from 'react-native';
// import {AsyncStorage} from '@react-native-community/async-storage';
import Title from '../elements/Header';
import Heading from '../elements/Heading';
import {FlatList} from 'react-native-gesture-handler';
import RecordItems from '../components/RecordItems';
import RecordIndex from '../components/RecordIndex';

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: '',
      apiToken: '',
      events: [],
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
      apiToken: await AsyncStorage.getItem('api_token'),
    });
    fetch(`http://localhost/api/user_event/${this.state.apiToken}`)
      .then(response => response.json())
      .then(recordsData => this.setState({loading: false, events: recordsData}))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <View>
        <Title />
        <View style={styles.UserWrapper}>
          <Heading name="種目一覧" />
          <View>
            {this.state.events.map(data => {
              return <Text key={data}>{data.name}</Text>;
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UserWrapper: {
    margin: 20,
  },
});

export default EventScreen;
