import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import * as Yup from 'yup';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import DraftsIcon from '@material-ui/icons/Drafts';


import { withStyles } from '@material-ui/core/styles';


import * as librariesActionCreators from '../../actions/actionTypes';

import Details from './Details'
import Nav from './Nav'


const createLibrarySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    wrapper: {
        fullWidth: true,
        maxWidth: 'lg',
        //position: 'relative',
    },
    paper: {

    }
});

class LibraryEditor extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }

    render() {
        const { local, classes} = this.props;

        return (
            <Fragment>
                <Nav />
                <div className={classes.root} >

                    <Paper elevation={1}>
                        <Typography component="h4">Details</Typography>
                        <Details {...this.props} />
                    </Paper>

                    <Paper elevation={1}>
                        <Typography component="h4">Tags</Typography>
                    </Paper>

                    <Paper elevation={1}>
                        <Typography component="h4">Syncs</Typography>
                    </Paper>

                    <Paper elevation={1}>
                        <Typography component="h4">Saved Searches</Typography>
                    </Paper>
                </div>
            </Fragment>
        );
    };

    handleChipChange = (chips) => {
        console.debug(chips.lenght);
        this.formikRef.current.setFieldValue('tags', chips, false);
    }

    onClose = () => {
        this.props.createLibraryDialogCancel()
    }

    onSave = () => {
        this.formikRef.current.submitForm();

    }
};

export default connect(
    state => state.librariesModule,
    dispatch => bindActionCreators(librariesActionCreators, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryEditor))));


