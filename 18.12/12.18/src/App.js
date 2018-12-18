import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    number: 0,
    todo: "",
    memo: [],
  }

  handleSubmit = () => {
    console.log('11', this.state.todo);
    this.setState(prevState => ({
      memo: [...prevState.memo, this.state.todo]
    }))
    this.setState({todo: ""})
  }

  handleInputChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div>
        hello world <br/>
      <input type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.todo} /> <input onClick={this.handleSubmit} type="button" />
        <ul>
          {this.state.memo.map((todo, i) => {
            return (
              <li key={i}>{todo}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
