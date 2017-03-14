import React from 'react'
import {observer} from 'mobx-react'
import injectSheet from 'react-jss'
import User from 'test-app/ui/User'
import Button from 'test-app/ui/Button'

const UserListView = observer(({users, onClickItem, onClickItemRemove, classes}) => {
    if (users.length == 0) {
        return <div className={classes.empty}>Ничего нет</div>
    }


    return (
        <div>
            {users.map((user) => (
                <div key={user.id} className={classes.container}>
                    <div>
                        <User {...user} />
                    </div>
                    <div className={classes.actions}>
                        <Button onClick={() => onClickItem(user.id)}>EDIT</Button>
                        <Button onClick={() => onClickItemRemove(user.id)}>DELETE</Button>
                    </div>
                </div>
            ))}
        </div>
    )
})

const styles = {
    container: {
        margin: '5px',
        background: '#eee',
        display: 'flex',
        justifyContent: 'space-between'
    },
    actions: {
        padding: '20px'
    },
    empty: {
        height: '100px',
        lineHeight: '100px'
    }
}

export default injectSheet(styles)(UserListView)