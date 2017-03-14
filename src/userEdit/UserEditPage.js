import React from 'react'
import {Link} from 'react-router-dom'
import {observer} from 'mobx-react'
import UserEditForm from 'test-app/userEdit/UserEditForm'
import UserEditFormActions from 'test-app/userEdit/UserEditFormActions'
import UserListStore from 'test-app/userList/UserListStore'
import UserEditValues from 'test-app/userEdit/UserEditFormValues'
import UserEditErrors from 'test-app/userEdit/UserEditFormErrors'
import PageLayout from 'test-app/ui/PageLayout'
import Button from 'test-app/ui/Button'

@observer
export default class UserEditPage extends React.Component {
    componentDidMount() {
        UserListStore.fetch()

        const {
            match
        } = this.props

        const user = UserListStore.userList.find(
            (user) => user.id == match.params.id
        )

        if (user) {
            UserEditValues.fio = user.fio
            UserEditValues.birthdate = user.birthdate
            UserEditValues.city = user.city
            UserEditValues.address = user.address
            UserEditValues.phone = user.phone
        } else {
            UserEditValues.reset()
        }

        UserEditFormActions.resetValidation()
    }

    render() {
        const {
            history,
            match
        } = this.props

        return (
            <PageLayout>
                <h3>{(match.params.id) ? 'Редактировать пользователя' : 'Создать пользователя'}</h3>
                <UserEditForm />
                <div>
                    <Link to="/">назад</Link>
                    <Button disabled={!UserEditErrors.isValid} onClick={() => {
                        UserEditFormActions.onSubmit(match.params.id)
                        history.push('/')
                    }}>ОК</Button>
                </div>
            </PageLayout>
        )
    }
}
