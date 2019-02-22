const form = ({ handleSubmit, handleChange, handleBlur, values, onSave, errors }) => {
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

export default form;
