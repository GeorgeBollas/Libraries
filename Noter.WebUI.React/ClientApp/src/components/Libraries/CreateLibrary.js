import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik, Field, Form, ErrorMessage } from 'formik';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as librariesActionCreators from '../../actions/Libraries';

class CreateLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();

        this.onSave = this.onSave.bind(this);
        this.onClose = this.onClose.bind(this);

    }

    render() {
        var local = this.props;

        return (
            <Dialog onClose={this.onClose} open={local.isCreatingLibrary}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        onSubmit={(e) => {
                            local.createLibrary(e.name, e.tags);
                        }}
                        render={({ errors, status, touched, isSubmitting }) => (
                            <Form>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" />
                                <Field type="text" name="tags" />
                            </Form>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onClose} color="primary">Cancel</Button>
                    <Button onClick={this.onSave} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        );
    };

    onClose() {
        this.props.cancelCreateLibrary()
    }

    onSave() {
        this.formikRef.current.submitForm();

    }
};


export default connect(
    state => state.libraries,
    dispatch => bindActionCreators(librariesActionCreators, dispatch))(CreateLibrary)


