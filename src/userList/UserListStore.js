import {observable, autorun} from 'mobx'
import uuid from 'uuid/v1'
import LocalStorage from 'test-app/api/LocalStorage'

class UserListStore {
    @observable userList = []
    _api

    constructor(api) {
        this._api = api
    }

    add = (user) => {
        this.userList.push({...user, id: uuid()})
        this._api.set(this.userList)
    }

    update = (user, id) => {
        const old = this.userList.find((item) => item.id == id)
        const index = this.userList.indexOf(old)

        if (index != -1) {
            this.userList[index] = {...user, id}
            this._api.set(this.userList)
        } else {
            this.add(user)
        }
    }

    delete = (id) => {
        const old = this.userList.find((item) => item.id == id)
        const index = this.userList.indexOf(old)

        if (index != -1) {
            this.userList.splice(index, 1)
            this._api.set(this.userList)
        }
    }

    fetch = () => {
        this.userList = JSON.parse(this._api.get()) || []
    }
}

export default new UserListStore(
    new LocalStorage()
)