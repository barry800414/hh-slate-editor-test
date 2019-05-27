import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SlateEditor from '../../src'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Slate Editor Demo</h1>
        <SlateEditor text='Modern React component module' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('demo'))
