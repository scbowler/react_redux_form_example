import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';

class SimpleForm extends Component {
    handleFormSubmit(formValues){
        console.log('On Submit Simple Form Values:', formValues);
    }

    resetForm(){
        this.props.reset();
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div>
                <h2 className="center">Custom Form</h2>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <Field label="Name" name="name" component={Input} />

                    <Field label="Email" name="email" component={Input} autoComplete="email" />

                    <Field label="Password" name="password" component={Input} type="password" autoComplete="new-password" />

                    <Field label="Confirm Password" name="confirmPassword" component={Input} type="password" autoComplete="new-password" />

                    <div className="form-actions">
                        <button onClick={this.resetForm.bind(this)} type="button">Reset Form</button>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(formValues) {
    const { name, email, password, confirmPassword } = formValues;
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const errors = {};

    if (!name) {
        errors.name = 'Please enter your name';
    } else if (name.length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }

    if (!email) {
        errors.email = 'Please enter your email';
    } else if (!emailRegEx.test(email)) {
        errors.email = 'Please enter a valid email address. Example: me@example.com';
    }

    if (!password) {
        errors.password = 'Please choose a password';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

export default reduxForm({
    form: 'simple-form',
    validate: validate
})(SimpleForm);
