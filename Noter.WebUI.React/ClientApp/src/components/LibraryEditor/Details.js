
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import ChipInput from 'material-ui-chip-input'

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const Details = props => {
    const { createLibrary, createLibrarySuccess, history } = props;
    return (
        <Formik ref={this.formikRef}
            initialValues={{ name: '', tags: [] }}
            onSubmit={(e) => {
                createLibrary(e.name, e.tags)
                    .then((result) => {
                        history.push('library-editor');
                        createLibrarySuccess(result.data.libraryId);
                    })
            }}
            component={form} //todo need to pass props down here
            validationSchema={form}
        />
    );
}

const form = props => {
    const { handleSubmit, handleChange, handleBlur, values, onSave, errors, classes, headerIsHidden, ...other } = props;
    return (
        <Form >
            <div className={this.props.classes.wrapper} >
                {this.props.isCreateLibraryRequested && <CircularProgress className={this.props.classes.progress} />}
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
                    <div>
                        <ChipInput
                            {...other} // to pass down to TextField
                            label="Tags"
                            onChange={(chips) => this.handleChipChange(chips)}
                        />
                    </div>
                </div>
            </div>
        </Form>);
};

export default Details