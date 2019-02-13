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

import * as actions from '../../actions/LibraryCreating';


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


const LibraryDetails = ({ handleChange, handleBlur, values, errors }) => {
        const { classes, headerIsHidden, ...other } = this.props;
        return (
            <Form >
                <div className={this.props.classes.wrapper} >
                    {this.props.isLibraryCreatorSaving && <CircularProgress className={this.props.classes.progress} />}
                    <div>
                        <div>
                            <Field
                                label="Name"
                                name="name"
                                onChange={handleChange} //By default client side validation is done onChange
                                onBlur={handleBlur} //By default client side validation is also done onBlur
                                value={values.title}
                                error={errors.title} //Error display
                                component={TextField}
                            />
                        </div>

                    </div>
                </div>
            </Form>);
    }

//todo remove this, should be passed in from CreateLibraryContainer
export default connect(
    state => state.libraryCreator,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(LibraryDetails));

