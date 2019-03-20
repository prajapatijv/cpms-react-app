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
        this.props.fetchUsers()
    }

    render() {
        const { users, user, selectUser, addUser, cancelUser , saveUser} = this.props
        
        return <UserList users={users} user={user} 
            onSelect={selectUser}
            onAdd={addUser}
            onCancel={cancelUser}
            onSave={saveUser}
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