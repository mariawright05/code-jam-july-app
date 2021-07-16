import React from 'react';

function Textarea(props) {
    return (
        <fieldset className="fieldset">
            <label htmlFor={props.id} className="form_label">{props.label}</label>
            <textarea
                className="form__textarea"
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

export default Textarea;
