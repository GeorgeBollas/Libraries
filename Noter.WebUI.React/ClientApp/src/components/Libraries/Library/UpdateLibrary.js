import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";



import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

//import TextField from '@material-ui/core/TextField';

import { fieldToTextField, TextField, TextFieldProps } from 'formik-material-ui';
import ChipInput from 'material-ui-chip-input'

import * as actions from '../../actions/LibraryEditing';
import LibraryDetails from './LibraryDetails';

const updateLibrarySchema = Yup.object().shape({
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
});

class CreateLibrary extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }



    componentDidMount() {
        this.props.fetchLibrary(this.props.libraryId);
    }

    render() {
        const { library, updateLibraryRequest, updateLibrarySuccess, classes } = this.props

        return (
            <div className="root">
                <Dialog onClose={this.onClose} open={this.isOpen} className={classes.wrapper} >
                    <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                    <DialogContent>
                        <Formik ref={this.formikRef}
                            initialValues={{ name: library.name }}
                            onSubmit={(e) => {
                                updateLibraryRequest(library.id, e.name)
                                    .then((result) => {
                                        updateLibrarySuccess(result.data.libraryId);
                                        this.onClose();
                                    })
                            }}
                            component={this.form}
                            validationSchema={updateLibrarySchema}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onClose} size="small" className="test" color="primary">Cancel</Button>
                        <Button type='submit' onClick={this.onSave} size="small" color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };

    form = ({ library }) => {
        return (
            <Form >
                <LibraryDetails library={library} />
            </Form>
        );
    }

    onClose = () => {
        this.props.createLibraryDialogCancel()
    }

    onSave = () => {
        this.formikRef.current.submitForm();
    }
};

export default CreateLibrary;

