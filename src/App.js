import React, { Component } from 'react'
import Button from './components/Button.js'
import ExampleComponent from './components/ExampleComponent.js'


export default class App extends Component {
componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res=> res.json())
}
render () {
    return (
        <div>
        <ExampleComponent />
        <Button />
        </div>
    )
    }
}