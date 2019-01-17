import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import { Formik, Field, Form, ErrorMessage } from 'formik';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const LibraryDialog = ({ library, updateLibrary, onClose }) => {
    return (
        <Dialog onClose={onClose}>
            <DialogTitle id="form-dialog-title">{library.libraryId ? 'Edit ' + library.name : 'Add a new library'}</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={library /** { email, social } */}
                    onSubmit={(values, actions) => {
                        axios.post(library.libraryId, values).then(
                            updatedLibrary => {
                                actions.setSubmitting(false);
                                updateLibrary(updatedLibrary);
                                onClose();
                            },
                            error => {
                                actions.setSubmitting(false);
                                actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                                actions.setStatus({ msg: 'Set some arbitrary status or data' });
                            }
                        );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" />
                            <Field type="text" name="social.twitter" />
                        </Form>
                    )}
                />
            </DialogContent>
            <DialogActions>
                {
                    //todo wire up buttons to above from
                }
                <Button onClick={this.handleCancel} color="primary">Cancel</Button>
                <Button type='submit' color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};



//export default class LibraryDialog extends React.Component {
//    constructor(props) {
//        super(props);

//        this.handleCancel = this.handleCancel.bind(this);
//        this.handleSave = this.handleSave.bind(this);
//        this.handleChange = this.handleChange.bind(this);

//        this.state = Object.assign({ libraryId: 0, name: '' }, this.props.library);

//    }

//    handleChange(event) {
//        this.setState({ name: event.target.value });
//    }

//    handleCancel() {
//        //todo set library back to original if edited
//        this.props.handleCancel();
//    }

//    handleSave() {
//        //todo validate first
//        this.props.handleSave(this.state)
//    }


//    render() {
//        var library = this.state;
//        return (
//            <Dialog
//                open={this.props.isOpen}
//                onClose={this.handleClose}
//                aria-labelledby="form-dialog-title"
//            >
//                <DialogTitle id="form-dialog-title">New Library</DialogTitle>
//                <DialogContent>
//                    <DialogContentText>
//                        {library.libraryId ? 'Edit ' + library.name : 'Add a new library'}
//                    </DialogContentText>
//                    <TextField
//                        autoFocus
//                        margin="dense"
//                        id="name"
//                        label="Name"
//                        type="email"
//                        fullWidth
//                        onChange={this.handleChange}
//                        value={library.name}
//                    />
//                </DialogContent>
//                <DialogActions>
//                    <Button onClick={this.handleCancel} color="primary">
//                        Cancel
//                    </Button>
//                    <Button onClick={this.handleSave} color="primary">
//                        Save
//                    </Button>
//                </DialogActions>
//            </Dialog>
//        );
//    }
//}
