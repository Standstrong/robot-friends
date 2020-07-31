import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

  //using class components gives us access to states
  //{} jsx says any thing between the braces is javascript
//setState lets us modify the state object


class App extends Component {

  constructor() {
  	super();

  	this.state = {
  		monsters: [],
  		searchField: ''
  	};

  	//this.handleChange = this.handleChange.bind(this); //arrow function does this automatically
  }
  //map returns the function we pass to it.it calls the function on all the individual stuff
  //a unique key is needed so react knows what element to update
  //there is 1. class component  2. function component
  //yihua prop will apear in the console
  //yihua in between <> yihua </> is a child
  //you cant call setState in render
  //react figures out the best time and way to update the dom


  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
  	this.setState({searchField: e.target.value});
  };

  render() {

  	const { monsters, searchField } = this.state;
  	//this is same as code above
  	//const monsters = this.state.monsters;
  	//const searchField = this.state.searchField;
  	const filteredMonsters = monsters.filter(monster => 
  		monster.name.toLowerCase().includes(searchField.toLowerCase())
  	)

  
    return (
      <div className="App">

        <h1>Robot Friends</h1>

        <SearchBox 

        	placeholder = 'search robots'
        	handleChange = {this.handleChange}
        />

        <CardList monsters = {filteredMonsters} />

                     
      </div>
    );
  }
}

export default App;
