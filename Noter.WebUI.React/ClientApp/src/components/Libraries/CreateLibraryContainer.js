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
});

class CreateLibrary extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
        this.state = { isOpen: true };
    }

    render() {
        const { history, createLibrary, createLibrarySuccess, classes } = this.props

        return (
            <div className="root">
                <Dialog onClose={this.onClose} open={this.isOpen} className={classes.wrapper} >
                    <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                    <DialogContent>
                        <Formik ref={this.formikRef}
                            initialValues={{ name: '', tags: [] }}
                            onSubmit={(e) => {
                                createLibrary(e.name, e.tags)
                                    .then((result) => {
                                        this.setState({ isOpen: false });
                                        history.push('library-editor');
                                        createLibrarySuccess(result.data.libraryId);
                                    })
                            }}
                            component={this.form}
                            validationSchema={createLibrarySchema}
                        />
                    </DialogContent>
                    <DialogActions>
                        <label className="test">hello</label>
                        <Button onClick={this.onClose} size="small" className="test" color="primary">Cancel</Button>
                        <Button type='submit' onClick={this.onSave} size="small" color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };

    form = ({ handleSubmit, handleChange, handleBlur, values, onSave, errors }) => {
        const { classes, headerIsHidden, ...other } = this.props;
        return (
            <Form >
                <LibraryDetails />
                <LibraryTags />
            </Form>
        );
    }

    handleChipChange = (chips) => {
        this.formikRef.current.setFieldValue('tags', chips, false);
    }


    onClose = () => {
        this.setState({ isOpen: false });
        this.props.createLibraryDialogCancel()
    }

    onSave = () => {
        this.formikRef.current.submitForm();
    }
};

export default connect(
    state => state.librariesModule,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((CreateLibrary))));

