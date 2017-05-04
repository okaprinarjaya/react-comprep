import React, { Component } from 'react'

class NeedNameAndConstants extends Component {
  render() {
    return (
      <div style={{border: "1px red solid", padding: "10px", marginBottom: "15px"}}>
        <h2>I am NeedNameAndConstants</h2>
        <p>{this.props.theName}</p>

        <ul>
          <li>{`ENABLE_LALALA = ${this.props.constants.ENABLE_LALALA}`}</li>
          <li>{`ENABLE_BLABLABLA = ${this.props.constants.ENABLE_BLABLABLA}`}</li>
          <li>{`FETCH_DATA_ASYNC = ${this.props.constants.FETCH_DATA_ASYNC}`}</li>
        </ul>
      </div>
    )
  }
}

export default NeedNameAndConstants
