import React from 'react';

// TODO: state, props만 받는 functional로 바꾸기
class Input extends React.Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='Write your Memo' value={this.props.memoInput} onChange={this.props.handleInputChange} />
        <input type='button' value="+" onClick={this.props.handleSubmit} />
      </div>
    )
  }
}

export default Input;
