import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

// const ImageMain = ({ imageInfo }) => {
//   const { title, image } = imageInfo;
//   const { imageStyle, textStyle, wrapperStyle } = styles;
//   return (
//     <View style={ wrapperStyle }>
//       <Text style={ textStyle }>
//         { title }
//       </Text>
//       <Image
//         source={{ uri: image }}
//         style={ imageStyle }
//         />
//     </View>
//   )
// }

// const ImageMain = ({ imageInfo }) => {
//   const { title, artist, url, thumbnail_image } = imageInfo;
//   const { imageStyle, textStyle, wrapperStyle } = styles;
//   return (
//     <View style={ wrapperStyle }>
//       <Text style={ textStyle }>
//         { title }
//       </Text>
//       <Text style={ textStyle }>
//         { artist }
//       </Text>
//       <Text style={ textStyle }>
//         { url }
//       </Text>
//       <Image
//         source={{ uri: thumbnail_image }}
//         style={ imageStyle }
//         />
//     </View>
//   )
// }

const ImageMain = ({imageInfo}) => {
  const {id, comment, event} = imageInfo;
  const {imageStyle, textStyle, wrapperStyle} = styles;
  return (
    <View style={wrapperStyle}>
      <Text style={textStyle}>{id}</Text>
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

export default ImageMain;
