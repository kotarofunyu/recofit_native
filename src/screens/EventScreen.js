import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage, ScrollView} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';
import {FlatList} from 'react-native-gesture-handler';

function Item({name}) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name} </Text>
    </View>
  );
}

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
          <FlatList
            data={this.state.events}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => <Item name={item.name} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UserWrapper: {
    margin: 20,
  },
  item: {
    backgroundColor: '#F6B12D',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EventScreen;
