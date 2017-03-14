// DateInput - takes Unix Timestamp to show date, fires onChange() with new Unix Timestamp value

import React from 'react'
import injectSheet from 'react-jss'
import moment from 'moment'

import FormInput from 'test-app/ui/FormInput'

const MAX_YEAR = 2027
const MIN_YEAR = 1917

function checkSelection(valueInternal) {
    return moment([valueInternal.years, valueInternal.months, valueInternal.date]
            .join('-'), 'YYYY-MM-DD')
            .isValid()
}

function toTimestamp(valueInternal) {
    valueInternal.months--
    return parseInt(moment(valueInternal).format('X'))
}

function DateInput({
    title,
    error,
    value,
    name,
    onChange,
    classes
}) {
    const valueInternal = moment.unix(value).toObject()
    valueInternal.months++ //moment months are 0..11

    const onChangeInternal = function(e) {
        const newValue = {...valueInternal, [e.target.name]: parseInt(e.target.value)}
        if (checkSelection(newValue)) {
            onChange(name, toTimestamp(newValue))
        } else {
            console.warn('invalid date')
        }
    }

    return (
        <FormInput title={title} error={error}>
            <label className={classes.label}>День: </label>
            <select 
                name="date" 
                className={classes.options} 
                onChange={(e) => {onChangeInternal(e)}} 
                value={valueInternal.date}
            >
                {[...Array(31).keys()].map((i) => <option key={'d'+i}>{i+1}</option>)}
            </select>

            <label className={classes.label}>Месяц: </label>
            <select 
                name="months" 
                className={classes.options} 
                onChange={(e) => {onChangeInternal(e)}} 
                value={valueInternal.months}
            >
                {[...Array(12).keys()].map((i) => <option key={'m'+i}>{i+1}</option>)}
            </select>

            <label className={classes.label}>Год: </label>
            <select 
                name="years" 
                className={classes.options} 
                onChange={(e) => {onChangeInternal(e)}} 
                value={valueInternal.years}
            >
                {[...Array(MAX_YEAR - MIN_YEAR + 1).keys()].map(
                    (i) => <option key={'y'+i}>{i + MIN_YEAR}</option>
                )}
            </select>
        </FormInput>
    )
}

const styles = {
    label: {
        fontSize: '14px',
        display: 'inline-block',
        marginRight: '7px'
    },
    options: {
        marginRight: '25px'
    }
}

export default injectSheet(styles)(DateInput)