import React , { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../../components/user/user-list'
import {  fetchUsers, selectUser } from './actions'

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    render() {
        const { users } = this.props
        return <UserList users={users} onSelect={this.onSelect.bind(this)} />
    }

    onSelect = () => {
        alert("1")
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.userState.users
    }
}


const mapStateToDispatch = (dispatch) => ({
    onSelect: dispatch(selectUser)
})

export default connect(mapStateToProps, null)(UserContainer)