import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Title extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          RecoFit
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffa500',
    height: 80
  },
  headerTitle: {
    color: Colors.light,
    textAlign: 'center',
    marginTop: 45,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1
  }
})

export default Title;
