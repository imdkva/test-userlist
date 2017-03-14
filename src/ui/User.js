import React from 'react'
import injectSheet from 'react-jss'
import moment from 'moment'

function User({
    fio,
    birthdate,
    address,
    city,
    phone,
    onClick,
    classes
}) {
    return (
        <div onClick={onClick} className={classes.container}>
            <div className={classes.row}><span className={classes.label}>ФИО:</span> {fio}</div>
            <div className={classes.row}><span className={classes.label}>
                Дата рождения:</span> {moment.unix(birthdate).format('DD-MM-YYYY')}
            </div>
            <div className={classes.row}><span className={classes.label}>Адрес:</span> {address}</div>
            <div className={classes.row}><span className={classes.label}>Город:</span> {city}</div>
            <div className={classes.row}><span className={classes.label}>Телефон:</span> {phone}</div>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'left',
        padding: '10px'
    },
    row: {
        height: '25px'
    },
    label: {
        width: '140px',
        display: 'inline-block',
        fontWeight: 'bold'
    }
}

export default injectSheet(styles)(User)