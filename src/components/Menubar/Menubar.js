import React, { Component } from 'react'

class Menubar extends Component {
  changeTheNameHandler() {
    const listOfNames = [
      'Bobby KooL',
      'JrX',
      'Eka Rock',
      'Mike Ness',
      'Jim Root',
      'Mike Thompson',
      'Oka Prinarjaya'
    ]

    this.props.changeTheNameHandler(listOfNames[Math.floor(Math.random() * listOfNames.length)])
  }

  render() {
    const menuItems = this.props.menubar.menuItems.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))

    return (
      <div style={{border: "1px red solid", padding: "10px", marginBottom: "15px"}}>
        <h2>I am Menubar</h2>

        <ul>
          {menuItems}
        </ul>

        <ul>
          <li>{`ENABLE_LALALA = ${this.props.constants.ENABLE_LALALA}`}</li>
          <li>{`ENABLE_BLABLABLA = ${this.props.constants.ENABLE_BLABLABLA}`}</li>
          <li>{`FETCH_DATA_ASYNC = ${this.props.constants.FETCH_DATA_ASYNC}`}</li>
        </ul>

        <p>{`Now ${this.props.theName} is with You...`}</p>
        <button type="button" onClick={() => this.changeTheNameHandler()}>ROLL baby ROLLLL..!</button>
      </div>
    )
  }
}

export default Menubar
