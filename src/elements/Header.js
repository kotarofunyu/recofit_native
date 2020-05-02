import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class Title extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flexBox}>
          <Image
            style={styles.headerLogo}
            source={require('../assets/app_icon.png')}
          />
          <Text style={styles.headerTitle}>RecoFit</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffa500',
    height: 80,
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  headerTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
  headerLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
});

export default Title;
