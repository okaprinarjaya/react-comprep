import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"

import store from './store'
import Menubar from './components/Menubar'
import NeedNameAndConstants from './components/NeedNameAndConstants'

const HoldAllComs = () => (
  <div>
    <Menubar />
    <NeedNameAndConstants />
  </div>
)

class App extends Component {
    render()
    {
        return (
          <Provider store={store}>
            <HoldAllComs />
          </Provider>
        )
    }
}

render(
    <App />,
    document.getElementById('react-app')
)
