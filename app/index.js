import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// component name as App
// component concerns 
//  state, lifeCycle, UI
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Hyojin'
        }
        this.updateName = this.updateName.bind(this)
    }

    updateName() {
        this.setState({
            name: 'Jyn'
        })
    }
    render() {
        return (
        <React.Fragment> 
            <h1> Hello, {this.state.name}</h1>
            <button onClick={this.updateName}>Change Name</button>
        </React.Fragment>
        )
        // babel will compile the React jsx into regular old JS (creatElement) invocation/ ES6+ old browsers,
        //  so DOM can render
        
        // return React.createElement(
        //     "div",
        //     null,
        //     "Hello World!"
        // )
    }
}

// render element into DOM
ReactDOM.render(
    // two different argument
    // first: React element
    <App />,
    // second: where to render to the Element to
    document.getElementById('app')
    // when we render our App component ( line 8-24 ), we are rendering it to the element that has id called app (index.html)
   
) 