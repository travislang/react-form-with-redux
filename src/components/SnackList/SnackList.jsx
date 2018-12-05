import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
});

class SnackList extends Component {
    

    render() {
        const { classes } = this.props;
        let snacks = this.props.reduxStore.snacks.map( (item, i) => {
            return <ListItem key={i} divider><ListItemText primary={item} /></ListItem>
        })
        return (
            <Grid container 
                direction="column"
                justify="center"
                alignItems="center" className={classes.root}>
                <Grid item xs={12}>
                    <List className={classes.root}>
                        {snacks}
                    </List>
                </Grid>
            </Grid>
            
        )
    }
}

const mapReduxStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

SnackList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(SnackList));