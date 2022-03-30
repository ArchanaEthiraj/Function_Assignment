import React, { Component } from 'react'
import Employee from './Employee'
import Props from './Props'
import Vote from './Vote'
import Hide from './Hide'
export class App extends Component {
  render() {
    return (
      <div>
        <Props title="Beast"/>
        <Employee Name="Archana" salary={21000}/>
        <h2>Vote</h2>
        <Vote subject="c"/>
        <Vote subject="c++"/>
        <Vote subject="Python"/>
        <Vote subject="Java"/>
        <Hide/>
      </div>
    )
  }
}

export default App