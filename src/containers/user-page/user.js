import React , { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../../components/user/user-list'
import {  fetchUsers } from './actions'

class UserContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    render() {
        return <UserList />
    }
}

const mapStateToProps = (state, props) => {
    return {
    }
}


const mapStateToDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, null)(UserContainer)