import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import NameCell from './NameCell';

class NameList extends Component {

  constructor(props) {
    super(props);
  }

  renderNames() {
    return this.props.names.map(name =>
      <NameCell key={name} name={name} />
    );
  }

  render() {

    return (
      <ScrollView>
      {this.renderNames()}
      </ScrollView>
    );
  }
}

export default NameList;
