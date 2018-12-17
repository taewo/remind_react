import React from 'react';

class Lists extends React.Component {
  render () {
    console.log(1, this.props.memoData)
    return (
      <ul>
        {this.props.memoData.map((val, key) => {
          console.log("val", val)
          return (
            <li key={key.toString()}>{val.txt}</li>
          )
        })}
      </ul>
    )
  }
}

export default Lists;
