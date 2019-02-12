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

//import TextField from '@material-ui/core/TextField';


import * as librariesActionCreators from '../../actions/actionTypes';

import LibraryEditorForm from './LibraryEditorForm'


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

class LibraryEditor extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();

        this.onSave = this.onSave.bind(this);
        this.onClose = this.onClose.bind(this);

    }

    render() {
        const local = this.props;
        const { history } = this.props

        return (
            <div className="root">
                <Dialog onClose={this.onClose} open={local.isCreateLibraryDialogOpen} className={local.classes.wrapper} >
                    <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                    <DialogContent>

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


    handleChipChange(chips) {
        console.debug(chips.lenght);
        this.formikRef.current.setFieldValue('tags', chips, false);
    }


    onClose() {
        this.props.createLibraryDialogCancel()
    }

    onSave() {
        this.formikRef.current.submitForm();

    }
};

export default connect(
    state => state.librariesModule,
    dispatch => bindActionCreators(librariesActionCreators, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryEditor))));


