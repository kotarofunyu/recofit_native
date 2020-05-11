import React, {Component} from 'react';
import {View, ScrollView, Text, Button, RefreshControl} from 'react-native';
import axios from 'axios';
import RecordIndex from './RecordIndexver';

class RecordItems extends Component {
  state = {
    images: [],
    refreshing: false,
  };

  componentWillMount() {
    axios.get('http://localhost/api/training_record').then(res => {
      this.setState({images: res.data, refreshing: true});
    });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.componentWillMount().then(() => {
      this.setState({refreshing: false});
    });
  };

  renderRecords() {
    return this.state.images.map((data, i) => {
      return (
        <View>
          <RecordIndex key={i} imageInfo={data} />
          <Button
            title="記録する"
            onPress={() => this.props.navigation.navigate('RecordDetail')}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <RecordIndex
            records={this.state.images}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

export default RecordItems;
