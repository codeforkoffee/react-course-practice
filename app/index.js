import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// component name as App
// component concerns 
//  state, lifeCycle, UI
class App extends React.Component{
    render() {
        return (
        <div> 
            Hello World! 
        </div>
        )
        // babel will compile the React jsx into regular old JS (creatElement) invocation,
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
    // Render the element App to
   
) 