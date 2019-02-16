import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";



import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

import { fieldToTextField, TextField, TextFieldProps } from 'formik-material-ui';

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
        const { classes,  } = this.props;
        return (
            <Form >
                <div className={classes.wrapper} >
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

<Formik ref={this.formikRef}
    initialValues={{ name: '', tags: [] }}
    onSubmit={(e) => {
        createLibraryRequest(e.name, e.tags)
            .then((result) => {
                this.setState({ isOpen: false });
                createLibrarySuccess(result.data.libraryId);
                this.onClose();
            })
    }}
    component={this.form}
    validationSchema={createLibrarySchema}
    //todo move into <LibraryTags />

    handleChipChange= (chips) => {
        this.formikRef.current.setFieldValue('tags', chips, false);
}

export default LibraryDetails;

