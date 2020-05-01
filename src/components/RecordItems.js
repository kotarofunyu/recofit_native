import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import RecordIndex from './RecordIndex';

class RecordItems extends Component {
  state = {
    images: []
  }

  componentWillMount() {
    axios.get('https://recofit.jp/api/training_record')
    .then(res => {
      this.setState({ images: res.data });
    });
  }

  renderRecords() {
    return this.state.images.map(data => {
      return <RecordIndex key={data.id} imageInfo={data} />
    });
  }

  render() {
    return (
      <ScrollView>
        { this.renderRecords() }
      </ScrollView>
    )
  }
}

export default RecordItems;
