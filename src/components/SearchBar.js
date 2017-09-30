import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleSearch = (text) => {
    this.setState({text});
    var searchResults = [];
    var searchText = text;
    if (text.includes(' ')) {
      var textSplit = text.split(' ');
      searchResults = this.props.names.filter(function (name) {
        var nameSplit = name.split(' ');
        var firstName = nameSplit[0];
        var lastName = nameSplit[1];
        return ((firstName.indexOf(textSplit[0]) == 0) && (lastName.indexOf(textSplit[1]) == 0) );
      });
    } else {
      searchResults = this.props.names.filter(function (name) {
        var nameSplit = name.split(' ');
        return ( name.includes(text) && ((nameSplit[0].indexOf(text) == 0) || (nameSplit[1].indexOf(text) == 0)) );
      });
    }

    this.props.updateState(searchResults, searchText);
  }

  render() {
    return (
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder="Search"
      onChangeText={(text)=>this.handleSearch(text)}
      value={this.state.text}
      />
    );
  }
}

export default SearchBar;
