import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from '../../components/user/user-list'
import {  fetchUsers, selectUser } from './actions'

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const { users, onSelectUser } = this.props
        return <UserList users={users} onSelect={onSelectUser} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userState.users
    }
}


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(
    {
        fetchUsers: fetchUsers,
        onSelectUser: selectUser
    } 
,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)