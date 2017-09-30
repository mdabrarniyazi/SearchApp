import React from 'react';
import { View, Text } from 'react-native';

const NameCell = (props) => {
  const {textStyle, viewStyle, lineStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.name} </Text>
      <View style={lineStyle}></View>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    width: null,
    flex: 1
  },
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
};

export default NameCell;
