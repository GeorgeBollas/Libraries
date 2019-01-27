import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Formik, Field, Form, ErrorMessage } from 'formik';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

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
        margin: theme.spacing.unit *2,
        padding: theme.spacing.unit * 2,
        position: 'relative',
        backgroundColor: green[500],
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
        var local = this.props;

        return (
            <Dialog onClose={this.onClose} open={local.isCreatingLibrary} className={local.classes.root}>
                <DialogTitle id="form-dialog-title">Add a new library</DialogTitle>
                <DialogContent>
                    <Formik ref={this.formikRef}
                        onSubmit={(e) => {
                            local.requestCreateLibrary(e.name, e.tags);
                        }}
                        render={({ errors, status, touched, isSubmitting }) => (
                            <Form>
                                <div className={local.classes.wrapper} >
                                    {local.isRequestedCreateLibrary && <CircularProgress className={local.classes.progress} />}
                                    <div>
                                        <Field type="text" name="name" />
                                        <ErrorMessage name="name" component="div" />
                                        <Field type="text" name="tags" />
                                        <ErrorMessage name="tags" component="div" />
                                    </div>
                                </div>
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


