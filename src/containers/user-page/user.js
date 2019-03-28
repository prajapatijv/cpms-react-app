import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from '../../components/user/user-list'
import * as userActionCreators from './actions'

class UserContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers("")
    }

    render() {
        const { users, user, selectUser, fetchUsers, addUser, closeUser , saveUser, deleteUser, 
                fetching, saving, deleting } = this.props

        return <UserList 
            users={users} user={user} 
            onSelect={selectUser}
            onSearch={fetchUsers}
            onAdd={addUser}
            onClose={closeUser}
            onSave={saveUser}
            onDelete={deleteUser}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userState.users,
        user: state.userState.user,
        fetching:state.userState.fetching,
        saving:state.userState.saving,
        deleting:state.userState.deleting
    }
}


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(userActionCreators, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)