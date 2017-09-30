// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Make a component
const Header = ({ onPress1, onPress2 }) => {

  const { textStyle, viewStyle, buttonStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={ onPress1 } style={buttonStyle}>
        <Text style={textStyle}>
          Print All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ onPress2 } style={buttonStyle}>
        <Text style={textStyle}>
          Print First
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

// Make the component available to other parts of the app
export default Header;
