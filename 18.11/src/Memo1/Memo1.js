import React from 'react';
import Input from './Input';
import Lists from './Lists';

class Memo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoInput: "",
      memoData: [
        {
          txt: 'hello',
          done: true,
        }, {
          txt: 'hello2',
          done: false,
        },
      ]
    }
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitEnter = this.handleSubmitEnter.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  // TODO: checkbox 토글 이벤트 적용
  handleCheckbox(e) {
    console.log('handleCheckbox', e.target);
    // this.setState({
    //   ...memoInput,
    //   memoData: [
    //
    //   ]
    // })

  }

  handleSubmitEnter(e) {
    if (this.state.memoInput == "") return;
    if (e.key === 'Enter') {
      this.setState({
        memoData: [
          ...this.state.memoData,
          {
            txt: this.state.memoInput,
            done: false,
          }
        ]
      }, () => {
        this.setState({
          memoInput: '',
        })
      })
    }
  }

  handleSubmitClick(e) {
    if (this.state.memoInput == "") return;
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
    this.setState({
      memoInput: event.target.value,
    })
  }

  render() {
    return(
      <div>
        <h1>Memo1</h1>
        <Input
          handleSubmitClick={this.handleSubmitClick}
          handleInputChange={this.handleInputChange}
          memoInput={this.state.memoInput}
          handleSubmitEnter={this.handleSubmitEnter}
        />
        <Lists
          handleCheckbox={this.handleCheckbox}
          memoData={this.state.memoData}
        />
      </div>
    )
  }

}

export default Memo1;
