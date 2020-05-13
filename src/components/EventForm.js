import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: [
        {
          name: '',
          setData: [
            {
              weight: '',
              rep: '',
              set: '',
              main: null,
              renewal: null,
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <View>
        <View style={styles.eventArea}>
          <TextInput
            placeholder="種目名"
            value={this.state.eventData[0].name}
            onChangeText={name => this.setState({name})}
          />
        </View>
        <View style={styles.setArea}>
          <TextInput
            placeholder="重量kg"
            value={this.state.eventData[0].setData[0].weight}
          />
          <TextInput
            placeholder="回数rep"
            value={this.state.eventData[0].setData[0].rep}
          />
          <TextInput
            placeholder="セット"
            value={this.state.eventData[0].setData[0].set}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    height: 50,
    backgroundColor: '#308EEF',
    margin: 10,
  },
  setArea: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
