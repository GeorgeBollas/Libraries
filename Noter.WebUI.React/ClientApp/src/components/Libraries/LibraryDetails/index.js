import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { Formik } from 'formik';
import * as Yup from 'yup';

import { withStyles } from '@material-ui/core/styles';

import Form from './Form';

import * as actions from '../../../actions/LibrariesApi';

const libraryDetailsSchema = Yup.object().shape({
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
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
        position: 'relative',
    },
});

class LibraryDetails extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchLibrary(this.props.match.params.id);
    }

    render() {

        const { library } = this.props;

        return (
            <Formik ref={this.formikRef}
                enableReinitialize={true}
                        initialValues={{ name: library.name, description: library.description }}
                        onSubmit={(values, { setSubmitting, setErrors }) => {
                            this.onEditDetailsSubmit(values.name, values.tags, setSubmitting, setErrors);
                        }}
                        component={Form}
                        validationSchema={libraryDetailsSchema}
                    />
        );
    };


    
    onEditDetailsSubmit = (name, description, setSubmitting, setErrors) => {

        var errors = {};

        const { history, onUpdateDetailsSuccessful } = this.props;
        this.props.requestCreateLibrary(name, description)
            .then(result => {
                setSubmitting(false);
                onUpdateDetailsSuccessful(result.data.libraryId);
                history.push('/search/' + result.data.libraryId);

            })
            .catch(e => {
                setSubmitting(false);
                setErrors({ name: e.response.data.failures.Name });
            })
    }

};

export default connect(
    state => ({
        library: state.libraryEditing.library
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((LibraryDetails))));


