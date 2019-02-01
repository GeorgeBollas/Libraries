import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Formik, Form, } from 'formik';
import Yup from 'yup';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';


import * as librariesActionCreators from '../../actions/Libraries';

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

class CreateLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();

        this.onSave = this.onSave.bind(this);
        this.onClose = this.onClose.bind(this);

    }

    render() {
        let local = this.props;

        return (
            <Dialog onClose={this.onClose} open={local.isCreatingLibrary} className={local.classes.root}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        onSubmit={(e) => {
                            local.requestCreateLibrary(e.name || '', e.tags || '');
                        }}
                        component={this.form}
                        validationSchema={Yup.object().shape({
                            name: Yup.string() //Client side validation for field "title"
                                .min(3, 'Name must be at least 3 characters long.')
                                .required('Name is required.'),
                            tags: Yup.string() //todo need to write custom validator?? or Regex??
                                .required("Tags is required"),
                        })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onClose} color="primary">Cancel</Button>
                    <Button onClick={this.onSave} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        );
    };

    form = ({ handleSubmit, handleChange, handleBlur, values, errors}) => {
        return (
            <Form>
                <div className={this.props.classes.wrapper} >
                    {this.props.isRequestedCreateLibrary && <CircularProgress className={this.props.classes.progress} />}
                    <div>
                        <div>
                            <TextField
                                hintText="name of the new library"
                                floatingLabelText="Name"
                                name="name"
                                onChange={handleChange} //By default client side validation is done onChange
                                onBlur={handleBlur} //By default client side validation is also done onBlur
                                value={values.title}
                                errorText={errors.title} //Error display
                                />
                        </div>
                        <div>
                            <TextField
                                hintText="Tags"
                                floatingLabelText="Tags"
                                name="tags"
                                onChange={handleChange} //By default client side validation is done onChange
                                onBlur={handleBlur} //By default client side validation is also done onBlur
                                value={values.title}
                                errorText={errors.title} //Error display
                            />
                        </div>
                    </div>
                </div>
            </Form>);
    }


    onClose() {
        this.props.createLibraryDialogCancel()
    }

    onSave() {
        this.formikRef.current.submitForm();

    }
};

export default connect(
    state => state.libraries,
    dispatch => bindActionCreators(librariesActionCreators, dispatch)
)(withStyles(styles, { withTheme: true })(CreateLibrary));


