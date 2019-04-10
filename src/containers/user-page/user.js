import React, { useEffect, useState, Component, useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { useMappedState, useDispatch, } from "redux-react-hook";

import UserList from '../../components/user/user-list'
import * as userActionCreators from './actions'

const UserContainer = ({ user, selectUser, fetchUsers, addUser, closeUser, saveUser, deleteUser,
     saving, deleting }) => {

    const load = useCallback(
        () => dispatch(userActionCreators.fetchUsers(""))
    );

    const mapState = useCallback(
        state => ({
            users: state.userState.users,
            user: state.userState.user,
            fetching: state.userState.fetching
        }),
    );
    const { users , fetching } = useMappedState(mapState)
    const dispatch = useDispatch()

    useEffect(() => {
        load()
    },[]);

    return (
        <UserList
            users={users}
            user={user}
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
    )
}



const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(userActionCreators, dispatch)

export default UserContainer

UserContainer.propTypes = {
    users: PropTypes.array,
    user: PropTypes.object,
    selectUser: PropTypes.func,
    fetchUsers: PropTypes.func,
    addUser: PropTypes.func,
    closeUser: PropTypes.func,
    saveUser: PropTypes.func,
    deleteUser: PropTypes.func,
    fetching: PropTypes.bool,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}