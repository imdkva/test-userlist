import {observable} from 'mobx'

class UserEditFormValues {
    @observable fio
    @observable birthdate
    @observable address
    @observable city
    @observable phone

    constructor() {
        this.reset()
    }

    reset() {
        this.fio = ''
        this.birthdate = 157766400 //unix timestamp seconds
        this.address = ''
        this.city = ''
        this.phone = ''
    }
}

export default new UserEditFormValues()