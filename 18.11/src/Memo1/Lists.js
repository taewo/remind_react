import React from 'react';

class Lists extends React.Component {
  render () {
    return (
      <ul>
        {this.props.memoData.map((val, key) => {
          return (
            <li key={key.toString()}>
              {val.done ?
                <input type='checkbox' defaultChecked
                  onChange={() => this.props.handleCheckbox(this, key)}
                />
                : <input type='checkbox'
                    onChange={() => this.props.handleCheckbox(this,key)}
                  />
              }
              {val.txt}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Lists;
