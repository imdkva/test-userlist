import UserEditFormValues from 'test-app/userEdit/UserEditFormValues'
import UserEditFormErrors from 'test-app/userEdit/UserEditFormErrors'
import CommonFormSchema from 'test-app/common/CommonUserFormSchema'
import CommonFormActions from 'test-app/common/CommonFormActions'
import UserListStore from 'test-app/userList/UserListStore'


class UserEditFormActions extends CommonFormActions {

    constructor(values, errors, schema) {
        super(values, errors, schema)
    }

    onSubmit = (id) => {
        UserListStore.update(this._values, id)
    }  

    resetValidation = () => {
        this._errors.reset()
        this.checkIsValid()
    }
}

export default new UserEditFormActions(
    UserEditFormValues, 
    UserEditFormErrors, 
    CommonFormSchema
)