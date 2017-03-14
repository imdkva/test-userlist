import React from 'react'
import {observer} from 'mobx-react'
import injectSheet from 'react-jss'
import {Link} from 'react-router-dom'
import UserListView from 'test-app/userList/UserListView'
import UserListStore from 'test-app/userList/UserListStore'
import PageLayout from 'test-app/ui/PageLayout'

@observer
class UserListPage extends React.Component {
    componentDidMount() {
        UserListStore.fetch()
    }

    render () {
        const {
            history,
            classes
        } = this.props

        return (
            <PageLayout>
                <Link to='/edit' className={classes.add}>Добавить пользователя</Link>
                <UserListView 
                    users={UserListStore.userList} 
                    onClickItem={(id) => {
                        history.push(`/edit/${id}`)
                    }}
                    onClickItemRemove={(id) => {
                        UserListStore.delete(id)
                    }}
                />
            </PageLayout>
        )
    } 
}

const styles = {
    add: {
        display: 'block',
        background: 'yellow',
        height: '50px',
        lineHeight: '50px',
        margin: '10px'
    }
}

export default injectSheet(styles)(UserListPage)