import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', password: '', loading: false, failed: false};
  }

  async componentDidMount() {
    if (await AsyncStorage.getItem('api_token')) {
      this.props.navigation.navigate('main');
    }
  }

  onSubmit() {
    this.setState({loading: true});
    return fetch(
      `http://localhost/api/login.json?id=${this.state.name}&password=${
        this.state.password
      }`,
    )
      .then(response => response.json())
      .then(jsonData => {
        this.setState({loading: false});
        if (jsonData['api_token']) {
          AsyncStorage.setItem('api_token', jsonData['api_token']);
          this.props.navigation.navigate('main');
        } else {
          this.setState({failed: true});
        }
      })
      .catch(error => console.error(error));
  }

  loginButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    } else {
      return (
        <Button
          title="ログイン"
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
        {this.state.failed && <Text>ログインに失敗しました</Text>}
        <View style={styles.wrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="ユーザー名"
            onChangeText={name => this.setState({name})}
          />

          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="パスワード"
            onChangeText={password => this.setState({password})}
          />

          {this.loginButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 100,
    marginRight: 50,
    marginLeft: 50,
  },
  textInput: {
    height: 60,
    width: 300,
    paddingLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});
