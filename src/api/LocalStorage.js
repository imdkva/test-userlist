
export default class LocalStorage {
    get() {
        return localStorage.getItem('users')
    }

    set(data) {
        localStorage.setItem('users', JSON.stringify(data))
    }
}