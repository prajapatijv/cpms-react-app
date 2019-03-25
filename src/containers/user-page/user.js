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
        const { users, user, selectUser, fetchUsers, addUser, cancelUser , saveUser, deleteUser, fetching } = this.props

        return <UserList users={users} user={user} 
            onSelect={selectUser}
            onSearch={fetchUsers}
            onAdd={addUser}
            onCancel={cancelUser}
            onSave={saveUser}
            onDelete={deleteUser}
            fetching={fetching}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userState.users,
        user: state.userState.user,
        fetching:state.userState.fetching
    }
}


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(userActionCreators, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)