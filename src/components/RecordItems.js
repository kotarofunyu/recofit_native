import React, {Component} from 'react';
import {View, ScrollView, Text, Button, RefreshControl} from 'react-native';
import RecordIndex from './RecordIndex';

class RecordItems extends Component {
  state = {
    images: [],
    refreshing: false,
  };

  componentDidMount() {
    this._fetch();
  }

  _fetch = () => {
    fetch('https://recofit.jp/api/training_record')
      .then(response => {
        this.setState({refreshing: true});
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          refreshing: false,
          images: responseJson,
        });
      })
      .catch(error => console.log(error));
  };

  renderRecords() {
    return this.state.images.map((data, i) => {
      return (
        <View>
          <RecordIndex key={i} imageInfo={data} />
          <Button
            title="記録㝙る"
            onPress={() => this.props.navigation.navigate('RecordDetail')}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._fetch()}
            />
          }>
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
