import React from 'react'
import injectSheet from 'react-jss'

function FormInput({
    title,
    error,
    classes,
    children
}) {
    return (
        <div className={classes.container}>
            <label className={classes.label}>{title}</label>
                {children}
            <div className={classes.error}>{error}</div>
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        height: '50px',
        textAlign: 'left'
    },
    label: {
        fontSize: '14px',
        display: 'block'
    },
    error: {
        fontSize: '12px',
        color: 'red'
    }
}

export default injectSheet(styles)(FormInput)