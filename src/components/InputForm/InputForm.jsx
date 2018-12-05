import React, { Component } from 'react';
import { connect } from 'react-redux';





class InputForm extends Component {
    state = {
        snack: ''
    }
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
    render() {
        return (
            <div>
                <input type="text" value={this.state.snack} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(InputForm);