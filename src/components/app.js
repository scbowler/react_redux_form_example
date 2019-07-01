import React from 'react';
import { Route } from 'react-router-dom';
import CustomForm from './custom-form';
import ErrorHandlingForm from './error-handling-form';
import SimpleForm from './simple-form';
import '../assets/css/app.scss';
import '../assets/css/form.scss';

const App = () => (
    <div className="container">
        <h1 className="center">Redux Form Examples</h1>

        <Route path="/" exact component={SimpleForm} />
        <Route path="/custom-form" component={CustomForm} />
        <Route path="/error-handling-form" component={ErrorHandlingForm} />
    </div>
);

export default App;
