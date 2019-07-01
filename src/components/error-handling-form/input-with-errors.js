import React from 'react';

export default props => {
    const { autoComplete = 'off', input, label, meta, type = 'text' } = props;

    const hasError = meta.touched && meta.error;

    return (
        <div className="input-field">
            <label>{label}</label>
            <input {...input} className={hasError ? 'with-error' : ''} type={type} autoComplete={autoComplete} />
            <div className="danger error">{hasError}</div>
        </div>
    );
}
