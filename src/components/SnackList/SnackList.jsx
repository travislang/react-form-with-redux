import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackList extends Component {
    

    render() {
        let snacks = this.props.reduxStore.snacks.map( (item, i) => {
            return <li key={i}>{item}</li>
        })
        return (
            <ul>
                {snacks}
            </ul>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapReduxStateToProps)(SnackList);