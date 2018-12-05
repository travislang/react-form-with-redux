import React, { Component } from 'react';
import { connect } from 'tls';



handleChange = e => {
    this.setState({
        snack: e.target.value
    })
}
handleClick = () => {
    this.props.dispatch({
        type: 'ADD_SNACK',
        payload: this.state.snack
    })
    this.setState({
        snack: ''
    })
}

class InputForm extends Component {
    render() {
        return (
            <input type="text" value={this.state.snack} onChange={this.handleChange} />
            <button onClick={this.handleClick}>Submit</button>
        )
    }
}

export default connect()(InputForm);