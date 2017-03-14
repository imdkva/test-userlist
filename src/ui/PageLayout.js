import React from 'react'
import injectSheet from 'react-jss'

function PageLayout({
    children,
    classes
}) {
    return (
        <div className={classes.container}>
            <img src="/img/logo.png" className={classes.logo}/>
            {children}
        </div>
    )
}

const styles = {
    container: {
        width: '60%',
        padding: '15px',
        display: 'block',
        margin: 'auto'
    },
    logo: {
        width: '100px',
        height: '100px'
    }
}

export default injectSheet(styles)(PageLayout)