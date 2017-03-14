import {observable} from 'mobx'

class UserEditFormErrors {
    @observable fio = ''
    @observable birthdate = ''
    @observable address = ''
    @observable city = ''
    @observable phone = ''
    @observable isValid = true

    constructor() {
        this.reset()
    }

    reset() {
        this.fio = ''
        this.birthdate = ''
        this.address = ''
        this.city = ''
        this.phone = ''
    }
}

export default new UserEditFormErrors()