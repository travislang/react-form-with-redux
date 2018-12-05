import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './InputForm.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

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

    handleClick = (e) => {
        e.preventDefault();
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
        const { classes } = this.props;

        return (
            <div className='formContainer'>
                <form onSubmit={this.handleClick} className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-with-placeholder"
                        label="Name"
                        placeholder="required"
                        className={classes.textField}
                        value={this.state.snack}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <Button variant="outlined" type='submit' color="primary">Submit</Button>
                </form>
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

InputForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(InputForm));