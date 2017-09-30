import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';
import NameList from './components/NameList';
import SearchBar from './components/SearchBar';

var reducer = function (acc, value) {
	this.acc = acc;
	this.value = value;
};

var acc = {};


class App extends Component {
	constructor(props) {
		var names = ['Loading Names'];
		var searchList = [];
		var searchWords = [];
		super(props);
		this.state = { names: names, searchList: searchList, searchWords:searchWords};
	}

	componentWillMount() {
		var names = [];
		names = this.generateNames();
		this.setState({names: names, searchList: names});
	}

	updateState = (searchResults, text) => {
		var searchWords = this.state.searchWords;
		searchWords.push(text);
		var searchList = this.state.searchList;
		if ( text && text.length > 0 ) {
			this.setState({names: searchResults, searchWords: searchWords});
		} else {
			this.setState({names: searchList});
		}
		var listStructure = this.list(reducer, acc);
	}

	render () {
		return (
			<View style={{ flex: 1 }}>
			<Header onPress1={() => this.getAllSearch()} onPress2={() => this.getFirstSearch()} />
			<SearchBar updateState={this.updateState} names={this.state.searchList}/>
			<NameList names={this.state.names}/>
			</View>
		);
	}

	list(reducer, acc) {
		var ans;
		var searchWords = this.state.searchWords;
		for (var i = 0; i < searchWords.length; i++) {
			if (i == 0) {
				ans = new reducer(acc, searchWords[i]);
			} else {
				ans = new reducer(ans, searchWords[i]);
			}
		}
		if (!ans) {
			ans = acc;
		}
		return ans;
	}

	generateName () {
		return Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 7) + " " + Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 7);
	}

	generateNames () {
		var names = [];
		for (var i = 0; i < 4000; i++) {
			var strig = this.generateName();
			names[i] = strig;
		}
		return names;
	}

	getAllSearch = () => {
		var currentSearch = this.list(reducer, acc);
		var allSearch = "";
		while (currentSearch && !this.isEmpty(currentSearch.acc)) {
			allSearch += currentSearch.value + "\n";
			currentSearch = currentSearch.acc;
		}
		allSearch += currentSearch.value + "\n";
		console.log(allSearch);
	}

	getFirstSearch = () => {
		var currentSearch = this.list(reducer, acc);
		while (currentSearch && !this.isEmpty(currentSearch.acc)) {
			currentSearch = currentSearch.acc;
		}
		console.log(currentSearch.value);
	}

	isEmpty = (obj) => {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
			return false;
		}
		return true;
	}
};

export default App;
