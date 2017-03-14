import React from 'react'
import injectSheet from 'react-jss'
import cn from 'classnames'

function Button({
    disabled, 
    onClick, 
    children, 
    classes
}) {
    return (
        <div className={cn({[classes.container]: true, [classes.disabled]: disabled})}>
            <button 
                onClick={onClick} 
                className={cn({[classes.input]: true, [classes.disabled]: disabled})}
                disabled={disabled}
            >{children}</button>
        </div>
    )
}

const styles = {
    container: {
        height: '45px',
        width: '100px',
        background: 'yellow',
        margin: '5px',
        display: 'inline-block'
    },
    input: {
        borderStyle: 'none',
        background: 'yellow',
        fontWeight: 'bold',
        lineHeight: '40px'
    },
    disabled: {
        background: 'lightgray',
    }
}

export default injectSheet(styles)(Button)