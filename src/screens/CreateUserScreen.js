import React from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default class CreateUserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  submitCreateUser() {
    fetch('http://localhost/api/user/', {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        api_token: this.state.apiToken,
        user: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
      }),
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          placeholder="ユーザー名"
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder="メールアドレス"
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="パスワード"
        />
        <TextInput
          value={this.state.password_confirmation}
          onChangeText={password_confirmation =>
            this.setState({password_confirmation})
          }
          placeholder="パスワード（確認）"
        />
        <Button
          title="登録する"
          onPress={() => {
            this.submitCreateUser();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 70,
  },
});
