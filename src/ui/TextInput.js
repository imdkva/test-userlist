import React from 'react'
import injectSheet from 'react-jss'

import FormInput from 'test-app/ui/FormInput'

function TextInput({
    title,
    error,
    value,
    name,
    type,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    classes
}) {
    return (
        <FormInput title={title} error={error}>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                onBlur={(e) => onBlur(e.target.name)}
                onFocus={(e) => onFocus(e.target.name)}
                className={classes.input}
            />
        </FormInput>
    )
}

const styles = {
    input: {
        width: '100%'
    }
}

export default injectSheet(styles)(TextInput)