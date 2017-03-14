import React from 'react'
import { observer } from 'mobx-react'
import UserForm from 'test-app/common/CommonUserForm'
import UserEditFormValues from 'test-app/userEdit/UserEditFormValues'
import UserEditFormErrors from 'test-app/userEdit/UserEditFormErrors'
import UserEditFormActions from 'test-app/userEdit/UserEditFormActions'

export default observer(function UserEditForm() {
    return (
        <UserForm 
            values={UserEditFormValues}
            errors={UserEditFormErrors}
            actions={UserEditFormActions}
        />
    )
})