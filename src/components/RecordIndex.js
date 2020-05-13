import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class RecordList extends React.Component {
  renderRecord(record) {
    return (
      <View style={styles.wrapperStyle}>
        <View style={styles.commentArea}>
          <Text>{record.comment}</Text>
        </View>
        <View style={styles.eventArea}>
          {record.event.map(data => {
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
          <Text style={styles.datetimeStyle}>{record.created_at}</Text>
        </View>
        <Button
          title="詳細"
          onPress={() =>
            this.props.navigation.navigate('RecordDetail', {record})
          }
        />
      </View>
    );
  }
  render() {
    const list = [];
    this.props.records.forEach(record => {
      list.push(this.renderRecord(record));
    });

    return <View>{list}</View>;
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

// export default RecordIndex;
