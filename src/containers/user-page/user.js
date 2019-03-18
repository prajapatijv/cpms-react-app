import React , { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../../components/user/user-list'
import {  fetchUsers } from './actions'

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchUsers())
    }

    render() {
        return <UserList />
    }
}

const mapStateToProps = (state, props) => {
    return {
        users:state.users
    }
}


const mapStateToDispatch = (dispatch) => {
    return {
        fetchUsers
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(UserContainer)