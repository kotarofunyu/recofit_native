import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import ImageMain from './ImageMain';

class ImageList extends Component {
  state = {
    images: []
  }

  // componentWillMount() {
  //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then(res => {
  //     this.setState({ images: res.data });
  //   });
  // }

  componentWillMount() {
    axios.get('http://localhost/api/training_record')
    .then(res => {
      this.setState({ images: res.data });
    });
  }

  // renderImages() {
  //   return this.state.images.map(data => {
  //     return <ImageMain key={data.title} imageInfo={data} />
  //   });
  // }

  renderImages() {
    return this.state.images.map(data => {
      return <ImageMain key={data.id} imageInfo={data} />
    });
  }

  render() {
    return (
      <ScrollView>
        { this.renderImages() }
      </ScrollView>
    )
  }
}

export default ImageList;
