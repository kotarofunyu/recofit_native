import React from 'react';
import {View, Button, StyleSheet, AsyncStorage} from 'react-native';

export default class Main extends React.Component {
  logout() {
    AsyncStorage.removeItem('api_token');
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Button
          title="ログアウト"
          onPress={() => {
            this.logout();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 100,
  },
});
