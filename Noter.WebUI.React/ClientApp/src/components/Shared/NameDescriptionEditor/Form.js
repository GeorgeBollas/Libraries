import React from 'react';

import { Formik, Form, Field } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fieldToTextField, TextField, TextFieldProps } from 'formik-material-ui';
import { withStyles } from '@material-ui/core/styles';

import { Editor } from 'react-draft-wysiwyg';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import SaveCancel from '../../Shared/SaveCancel'

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


//interface Values {
//    name: string;
//    tags: string[];
//}

const form = ({
    classes,
    handleSubmit,
    handleChange,
    isRequestedCreateLibrary,
    handleBlur,
    values,
    onSave,
    onCancel,
    errors }) => {
    return (
        <Form >
            <div className={classes.wrapper} >
                {isRequestedCreateLibrary && <CircularProgress className={classes.progress} />}
                        <SaveCancel />
                <div>
                    <div>
                        <Field
                            label="Name"
                            name="name"
                            onChange={handleChange} //By default client side validation is done onChange
                            onBlur={handleBlur} //By default client side validation is also done onBlur
                            value={values.name}
                            error={errors.name} //Error display
                            onEnter={onSave}
                            component={TextField}
                        />
                    </div>
                    <div>
                        <Editor />
                    </div>
                </div>
            </div>
        </Form>);
}

export default (withStyles(styles, { withTheme: true })(form));
