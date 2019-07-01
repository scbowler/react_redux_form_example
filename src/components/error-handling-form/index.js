import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputWithErrors from './input-with-errors';

class ErrorHandlingForm extends Component {
    handleFormSubmit(formValues) {
        console.log('On Submit Form Values:', formValues);

        this.resetForm();
    }

    resetForm() {
        this.props.reset();
    }

    render() {
        const { handleSubmit, valid } = this.props;

        return (
            <div>
                <h2 className="center">Error Handling Form</h2>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field label="Name" name="name" component={InputWithErrors} />
                    
                    <Field label="Email" name="email" component={InputWithErrors} autoComplete="email" />
                    
                    <Field label="Password" name="password" component={InputWithErrors} type="password" autoComplete="new-password" />

                    <Field label="Confirm Password" name="confirmPassword" component={InputWithErrors} type="password" autoComplete="new-password" />

                    <div className="form-actions">
                        <button onClick={this.resetForm.bind(this)} type="button">Reset Form</button>
                        <button className={valid ? 'form-valid' : 'form-invalid'}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(formValues){
    const { name, email, password, confirmPassword } = formValues;
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const errors = {};

    if(!name){
        errors.name = 'Please enter your name';
    } else if(name.length < 2){
        errors.name = 'Name must be at least 2 characters long';
    }

    if(!email){
        errors.email = 'Please enter your email';
    } else if(!emailRegEx.test(email)){
        errors.email = 'Please enter a valid email address. Example: me@example.com';
    }

    if(!password){
        errors.password = 'Please choose a password';
    } else if(password.length < 6){
        errors.password = 'Password must be at least 6 characters';
    }

    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

export default reduxForm({
    form: 'error-handling-form',
    validate: validate
})(ErrorHandlingForm);
