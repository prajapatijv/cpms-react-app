import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from '../../components/user/user-list'
import * as userActionCreators from './actions'

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers("")
    }

    render() {
        const { users, user, selectUser, fetchUsers, addUser, cancelUser , saveUser, deleteUser} = this.props
        
        return <UserList users={users} user={user} 
            onSelect={selectUser}
            onSearch={fetchUsers}
            onAdd={addUser}
            onCancel={cancelUser}
            onSave={saveUser}
            onDelete={deleteUser}
        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userState.users,
        user: state.userState.user
    }
}


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(userActionCreators, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)