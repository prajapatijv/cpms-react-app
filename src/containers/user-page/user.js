import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from '../../components/user/user-list'
import {  fetchUsers, selectUser } from './actions'
import { stat } from 'fs';

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const { users, user, onSelectUser } = this.props
        
        return <UserList users={users} user={user} onSelect= {onSelectUser } />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userState.users,
        user: state.userState.user
    }
}


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(
    {
        fetchUsers: fetchUsers,
        onSelectUser: selectUser
    } 
,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)