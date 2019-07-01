import React from 'react';

export default props => {
    const { autoComplete = 'off', input, label, meta, type = 'text' } = props;

    return (
        <div className="input-field">
            <label>{label}</label>
            <input {...input} type={type} autoComplete={autoComplete} />
            <div className="danger error">{meta.touched && meta.error}</div>
        </div>
    );
}
