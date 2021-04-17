import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <Header />
        )
    }   
};

ReactDOM.render(<App />, document.querySelector('#root'));