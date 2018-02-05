import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:'John', age:26 },
      {name:'Jane', age:27 },
      {name:'Johnny', age:28 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age:26 },
        {name:'Jane', age:27 },
        {name:'Johnny', age:29 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I am learning react</h1>
          <button onClick={ () => this.switchNameHandler( 'Faizan')}>Switch Name</button>
          <Person name = { this.state.persons[0].name } age =  { this.state.persons[0].age }/>
          <Person click = { this.switchNameHandler.bind(this, 'Faiz') } name =  { this.state.persons[1].name } age =  { this.state.persons[1].age }/>
          <Person name =  { this.state.persons[2].name } age =  { this.state.persons[2].age }>
             My Hobbies : Racing 
          </Person>
      </div>
    );
  }
}

export default App;
