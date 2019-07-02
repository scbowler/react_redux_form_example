import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SimpleForm extends Component {
    handleFormSubmit(formValues){
        // When your submit handler is called by redux form
        // you are passed all the form values
        console.log('On Submit Simple Form Values:', formValues);
    }

    resetForm(){
        // Reset comes from the reduxForm Higher Order Component
        this.props.reset();
    }

    render(){
        // handle submit comes from the reduxForm Higher Order Component
        const { handleSubmit } = this.props;

        return (
            <div>
                <h2 className="center">Simple Form</h2>
                {/* 
                    Here we pass what function we want to be called
                    when the form is submitted as a callback to
                    handleSubmit. handleSubmit comes from reduxForm
                */}
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <div className="input-field">
                        <label>Name</label>
                        {/* 
                            Field only requires name and component
                            name is used to identify the input and must 
                            be unique in a given form
                            component is what element to render
                        
                            In the next version we will pass a custom
                            component into field via component
                        */}
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

/*
    To use redux form we must wrap the component
    with the reduxForm higher order component

    reduxForm takes a configuration object
    the only required option in the configuration
    object is the 'form' key. This sets the name
    of the form. This is where we are giving the form
    a unique identifier for redux form to use to refer to
    this form.

    reduxForm returns a function that we immediately call
    and pass it our component. This adds the redux-form
    functionality to our component
*/
export default reduxForm({
    form: 'simple-form'
})(SimpleForm);
