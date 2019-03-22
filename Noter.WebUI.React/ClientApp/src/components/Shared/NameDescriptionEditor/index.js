import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

//import TextField from '@material-ui/core/TextField';

import Form from './Form';

import * as actions from '../../../actions/LibraryNavigator';

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
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
        position: 'relative',
    },
});

// 1. accept initial values
// 2. must be able to update values via properties
// 3. onSubmit
// 4. validate - called continuesly and returns error fields 
// 5. onCancel - widget closes the dialog though
// 6. accept validationSchema
// 7. styling from here unless overriden
// 8. openStateChanged

class NameDescriptionEditor extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }

    //const { a } = this.props; -- why cant we do this

    render() {
        const { onSubmit, isOpen, classes } = this.props

        return (
            <Dialog onClose={this.onClose} open={isOpen} className={classes.root}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        initialValues={{ name: '', description: '' }}
                        onSubmit={this.onClose}
                        component={Form}
                        validationSchema={createLibrarySchema}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onClose} size="small" color="primary">Cancel</Button>
                    <Button type='submit' onClick={this.onSave} size="small" color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        );
    };

    onCreateLibrarySubmit = (name, description, setSubmitting, setErrors) => {

        const { history, createLibraryRequestSuccess, createLibraryDialogOpen, onCreatedSuccessful } = this.props;

        // validate and submit if ok
        //  then close when completed
        // otherwise set errors for fields
    }

    onClose = () => {
        this.props.Cancel()
    }

    onSave = () => {
        this.formikRef.current.submitForm();

    }
};


// manage is open in internal state?? but call openStateChanged
export default connect(
    state => ({
        isCreateLibraryDialogOpen: state.libraryNavigator.isCreateLibraryDialogOpen
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((NameDescriptionEditor))));


