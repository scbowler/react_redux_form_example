import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';

class CustomForm extends Component {
    handleFormSubmit(formValues) {
        console.log('On Submit Custom Form Values:', formValues);
    }

    resetForm() {
        this.props.reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h2 className="center">Custom Form</h2>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <Field label="Name" name="name" component={Input} />
                    
                    <Field label="Email" name="email" component={Input} autoComplete="email" />
                    
                    <Field label="Password" name="password" component={Input} type="password" autoComplete="new-password" />

                    <Field  label="Confirm Password" name="confirmPassword" component={Input} type="password" autoComplete="new-password" />

                    <div className="form-actions">
                        <button onClick={this.resetForm.bind(this)} type="button">Reset Form</button>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'custom-form'
})(CustomForm);
