import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
                <h2 className="center">Simple Form</h2>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <div className="input-field">
                        <label>Name</label>
                        <Field name="name" component="input" />
                    </div>
                    <div className="input-field">
                        <label>email</label>
                        <Field name="email" component="input" autoComplete="email" />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <Field name="password" component="input" type="password" autoComplete="new-password" />
                    </div>
                    <div className="input-field">
                        <label>Confirm Password</label>
                        <Field name="confirmPassword" component="input" type="password" autoComplete="new-password" />
                    </div>

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
    form: 'simple-form'
})(SimpleForm);
