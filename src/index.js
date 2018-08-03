import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'

class Board extends React.Component {

    renderSquare(i) {
        return <Square value={i} />
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button className="square" onClick={() => { alert('click'); }}>
                {this.props.value}
            </button>
        );
    }
}


ReactDOM.render(<Board />, document.getElementById('root'));

