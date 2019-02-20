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

import * as actions from '../../../actions/LibraryNavigator';

const createLibrarySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

interface Values {
    name: string;
    tags: string[];
}
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

    render() {
        const { isCreateLibraryDialogOpen, classes, onCreateLibrarySubmit, onCreateLibrarySuccess } = this.props

        return (
            <Dialog onClose={this.onClose} open={isCreateLibraryDialogOpen} className={classes.root}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        initialValues={{name:'', tags:[]}}
                        onSubmit={(e) => {
                            onCreateLibrarySubmit(e.name, e.tags)
                        }}
                        component={this.form}
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



    form = ({ handleSubmit, handleChange, handleBlur, values, onSave, errors}) => {
        return (
            <Form >
                <div className={this.props.classes.wrapper} >
                    {this.props.isRequestedCreateLibrary && <CircularProgress className={this.props.classes.progress} />}
                    <div>
                        <div>
                            <Field
                                label="Name"
                                name="name"
                                onChange={handleChange} //By default client side validation is done onChange
                                onBlur={handleBlur} //By default client side validation is also done onBlur
                                value={values.title}
                                error={errors.title} //Error display
                                onEnter={onSave}
                                component={TextField}
                                />
                        </div>
                        <div>
                            <ChipInput
                                {...this.props} // to pass down to TextField
                                label="Tags"
                                onChange={(chips) => this.handleChipChange(chips)}
                            />
                        </div>
                    </div>
                </div>
            </Form>);
    }

    handleChipChange(chips) {
        console.debug(chips.lenght);
        //this.formikRef.current.state.values.tags = chips; //todo does this violate changing state directly??
        this.formikRef.current.setFieldValue('tags', chips, false);
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


