import {action} from 'mobx'
import validate from 'test-app/common/validate'

export default class UserAddFormActions {
    _values
    _errors
    _schema

    constructor(values, errors, schema) {
        this._errors = errors
        this._values = values
        this._schema = schema
    }

    _validateField = (field) => {
        const v = validate(this._values, this._schema)
        this._errors.isValid = v.isValid
        this._errors[field] = v[field]
    }

    @action
    onChange = (field, value) => {
        this._values[field] = value
        this._validateField(field)
    }

    @action
    onBlur = (field) => {
        this._validateField(field)
    }

    @action
    onFocus = (field) => {
        this._errors[field] = null
    }

    @action
    checkIsValid = () => {
        this._errors.isValid = validate(this._values, this._schema).isValid
    }
}