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

const CreateLibrary = ({ library, onClose, isOpen }) => {
    return (
        <Dialog onClose={onClose} open={isOpen}> 
            <DialogTitle id="form-dialog-title">{library.libraryId ? 'Edit ' + library.name : 'Add a new library'}</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={library /** {id, name, tags } */}
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(createLibrary(input.value))
                        input.value = ''
                        // close
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" />
                            { /* show diffrent format based on edit or insert */ }
                            <Field type="text" name="tags" />
                        </Form>
                    )}
                />
            </DialogContent>
            <DialogActions>
                {
                    //todo wire up buttons to above from
                }
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button type='submit' color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateLibrary;



import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)


