import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import Title from '../elements/Header';
import Heading from '../elements/Heading';
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
      userRecordUrl: '',
      test: '',
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
      apiToken: await AsyncStorage.getItem('api_token'),
      userRecordUrl: `https://recofit.jp/api/user_record/${
        this.state.apiToken
      }`,
      test: 'https://recofit.jp/api/user_record/Zj2bVMdX9kc3xjn5SjgE5hko',
    });
    fetch(`http://recofit.jp/api/user/${this.state.apiToken}`)
      .then(response => response.json())
      .then(jsonData => this.setState({loading: false, tasks: jsonData}))
      .catch(error => console.error(error));
    fetch(`https://recofit.jp/api/user_record/${this.state.apiToken}`)
      .then(response => response.json())
      .then(recordsData =>
        this.setState({loading: false, records: recordsData}),
      )
      .catch(error => console.error(error));
    cosole.log('aaaa');
  }

  renderRecords() {
    return this.state.records.map((data, i) => {
      return <RecordIndex key={i} imageInfo={data} />;
    });
  }

  render() {
    return (
      <View>
        <Title />
        <View style={styles.UserWrapper}>
          <Heading name="ログイン中のユーザー" />
          <Image
            source={{uri: `https://recofit.jp/${this.state.tasks.url}`}}
            style={{width: 50, height: 50}}
          />
          <View>
            <Text>{this.state.tasks.name}</Text>
            <Text>{this.state.tasks.introduction}</Text>
          </View>
          <View>
            <Button
              title="ログアウト"
              onPress={() => this.props.navigation.navigate('Logout')}
            />
          </View>
          <ScrollView>
            <RecordIndex
              records={this.state.records}
              navigation={this.props.navigation}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UserWrapper: {
    margin: 20,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default UserScreen;
