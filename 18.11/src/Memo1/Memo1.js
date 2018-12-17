import React from 'react';
import Input from './Input';
import Lists from './Lists';

class Memo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoInput: "",
      memoData: [
        {txt: 'hello'},
        {txt: 'hello2'},
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() {
    console.log('hello', ...this.state.memoData)
    this.setState({
      memoData: [
        ...this.state.memoData,
        {txt: this.state.memoInput}
      ]
    }, () => {
      this.setState({
        memoInput: '',
      })
    })
  }

  handleInputChange(event) {
    console.log('input', event.target);
    this.setState({
      memoInput: event.target.value,
    })
  }

  render() {
    return(
      <div>
        <h1>Memo1</h1>
        <Input
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          memoInput={this.state.memoInput}
        />
        <Lists
          memoData={this.state.memoData}
        />
      </div>
    )
  }

}

export default Memo1;
