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
        //.min(2, 'Too Short!')
        .max(50, 'Too Long!')
        //.required('Required'),
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

class CreateLibraryDialog extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }

    //const { a } = this.props; -- why cant we do this

    render() {
        const { onCreatedSuccessful, isCreateLibraryDialogOpen, classes } = this.props

        return (
            <Dialog onClose={this.onClose} open={isCreateLibraryDialogOpen} className={classes.root}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        initialValues={{ name: '', tags: [] }}
                        onSubmit={(values, { setSubmitting, setErrors }) => {
                            this.onCreateLibrarySubmit(values.name, values.tags, setSubmitting, setErrors);
                        }}
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
    

    handleChipChange(chips) {
        console.debug(chips.lenght);
        this.formikRef.current.setFieldValue('tags', chips, false);
    }

    onCreateLibrarySubmit = (name, tags, setSubmitting, setErrors) => {

        var errors = {};

        const { createLibraryRequestSuccess, createLibraryDialogOpen, onCreatedSuccessful } = this.props;
        this.props.requestCreateLibrary(name, tags)
            .then(result => {
                setSubmitting(false);
                createLibraryRequestSuccess(result.data.libraryId); //todo do we need this, should only need if ui changes state or to refresh list
                createLibraryDialogOpen(false)
                onCreatedSuccessful(result.data.libraryId);
            })
            .catch(e => {
                setSubmitting(false);
                setErrors({ name: e.response.data.failures.Name });
            })
    }

    onClose = () => {
        this.props.createLibraryDialogCancel()
    }

    onSave = () => {
        this.formikRef.current.submitForm();

    }
};

export default connect(
    state => ({
        isCreateLibraryDialogOpen: state.libraryNavigator.isCreateLibraryDialogOpen
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((CreateLibraryDialog))));


