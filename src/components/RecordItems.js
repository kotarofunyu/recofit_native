import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';
import RecordIndex from './RecordIndex';

class RecordItems extends Component {
  state = {
    images: [],
  };

  componentWillMount() {
    axios.get('https://recofit.jp/api/training_record').then(res => {
      this.setState({images: res.data});
    });
  }

  renderRecords() {
    return this.state.images.map((data, i) => {
      return <RecordIndex key={i} imageInfo={data} />;
    });
  }

  render() {
    return (
      <View>
        <Text>{this.props.getUrl}</Text>
        <ScrollView>{this.renderRecords()}</ScrollView>
      </View>
    );
  }
}

export default RecordItems;
