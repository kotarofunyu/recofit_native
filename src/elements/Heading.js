import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

class Heading extends React.Component {
  render() {
    return (
      <View style={styles.TitleWrap}>
        <Text style={styles.TitleStyle}>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TitleWrap: {
    textAlign: 'center',
    margin: 20,
  },
  TitleStyle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
})

export default Heading;
