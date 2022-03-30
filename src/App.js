import React, { Component } from 'react'
import Count from './Count'
import Print from './Print'
import Student from './Student'
import Contact from './Contact'
import Register from './Register'
import Welcome from './Welcome'
export class App extends Component {
  render() {
    return (
      <div>
        <Print/>
        <Student/>
        <Count/>
        <Contact/>
        <Register/>
        <Welcome/>
      </div>
    )
  }
}

export default App