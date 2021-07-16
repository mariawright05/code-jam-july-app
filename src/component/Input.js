import React from 'react';

function Input(props) {
    return (
        <fieldset className="fieldset">
            <label htmlFor={props.id} className="form_label">{props.placeholder}</label>
            <input
                className="form__input"
                type={props.type}
                name={props.placeholder}
                placeholder={props.placeholder}
                id={props.id}
                minLength={props.minLength}
                maxLength={props.maxLength}
                onChange={props.onChange}
                value={props.value}
                required/>
        </fieldset>
    );
}

export default Input;
