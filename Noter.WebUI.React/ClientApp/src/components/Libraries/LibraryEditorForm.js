
import React from 'react';


import { Form, Field } from 'formik';

import CircularProgress from '@material-ui/core/CircularProgress';
import ChipInput from 'material-ui-chip-input'

import { TextField } from 'formik-material-ui';

<Formik ref={this.formikRef}
    initialValues={{ name: '', tags: [] }}
    onSubmit={(e) => {
        local.createLibrary(e.name, e.tags)
            .then((result) => {
                history.push('library-editor');
                local.createLibrarySuccess(result.data.libraryId);
            })
    }}
    component={LibraryEditorForm}
    validationSchema={createLibrarySchema}
/>

const LibraryEditorForm = ({ handleSubmit, handleChange, handleBlur, values, onSave, errors }) => {
    const { classes, headerIsHidden, ...other } = this.props;
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

export default LibraryEditorForm