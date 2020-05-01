import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const RecordIndex = ({imageInfo}) => {
  const {created_at, comment, event} = imageInfo;
  const {imageStyle, textStyle, wrapperStyle} = styles;
  return (
    <View style={wrapperStyle}>
      <Text style={textStyle}>{created_at}</Text>
      <Text style={textStyle}>{comment}</Text>
      <View>
        {event.map(data => {
          return (
            <View>
              <Text key={data}>{data.name}</Text>
              <View>
                {data.set.map(item => {
                  return (
                    <Text key={item}>
                      {item.weight} x {item.rep} x {item.set}
                    </Text>
                  )
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = {
  wrapperStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
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
};

export default RecordIndex;
