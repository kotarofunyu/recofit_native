import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class RecordScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>記録詳細</Text>
        <View style={styles.wrapperStyle}>
          <View style={styles.commentArea}>
            <Text>{this.props.route.params.record.comment}</Text>
          </View>
          <View style={styles.eventArea}>
            {this.props.route.params.record.event.map(data => {
              return (
                <View>
                  <Text>{data.name}</Text>
                  <View>
                    {data.set.map(item => {
                      return (
                        <Text>
                          {item.weight} x {item.rep} x {item.set}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.datetimeArea}>
            <Text style={styles.datetimeStyle}>
              {this.props.route.params.record.created_at}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapperStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderColor: '#FB9508',
    borderRadius: 5,
  },
  commentArea: {
    marginBottom: 10,
  },
  eventArea: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
  datetimeArea: {
    padding: 5,
  },
  datetimeStyle: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'right',
    marginTop: 15,
  },
};
