import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';




class InputForm extends Component {
    state = {
        snack: ''
    }
    handleChange = e => {
        this.setState({
            snack: e.target.value
        })
    }
    getSnacks = () => {
        axios.get('/snacks')
        .then( res => {
            this.props.dispatch({
                type: 'SET_SNACKS',
                payload: res.data
            })
        }).catch( err => {
            console.log( 'error in get:', err );
        })
    }

    handleClick = () => {
        console.log(this.state.snack);
        let snack = {snack: this.state.snack};
        axios.post('/snacks', snack)
        .then( res => {
            this.getSnacks();
            this.setState({
                snack: ''
            })
        }).catch( err => {
            console.log( 'error in post:', err );
        })
    }

    componentDidMount() {
        this.getSnacks();
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