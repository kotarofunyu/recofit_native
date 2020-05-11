import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

const RecordIndex = ({imageInfo}) => {
  const {created_at, comment, event} = imageInfo;
  const {
    textStyle,
    wrapperStyle,
    commentArea,
    eventArea,
    datetimeArea,
    datetimeStyle,
  } = styles;
  return (
    <View style={wrapperStyle}>
      <View style={commentArea}>
        <Text style={textStyle}>{comment}</Text>
      </View>
      <View style={eventArea}>
        {event.map(data => {
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
      <View style={datetimeArea}>
        <Text style={datetimeStyle}>{created_at}</Text>
      </View>
    </View>
  );
};

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

export default RecordIndex;
