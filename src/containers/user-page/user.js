import React, { useEffect, useCallback } from 'react'
import { useMappedState, useDispatch, } from "redux-react-hook"

import UserList from '../../components/user/user-list'
import * as actions from './actions'


const UserContainer = (props) => {

    const dispatch = useDispatch()
    /*const load = useCallback(
        () => dispatch(actions.fetchUsers(""))
    );*/

    const mapState = useCallback(
        state => ({
            users: state.userState.users,
            user: (props.userId === undefined || state.userState.user !== undefined) ? state.userState.user : state.userState.users.find(u => u.id === parseInt(props.userId)),
            fetching: state.userState.fetching,
            saving: state.userState.saving,
            deleting: state.userState.deleting
        }),[props.userId || ""]);

    const { users, user, fetching, saving, deleting } = useMappedState(mapState)

    useEffect(() => {
        dispatch(actions.fetch(""))
    }, []);

    return (
        <UserList
            users={users}
            user={user}
            //onSelect={(id) => dispatch(actions.select(props.userId))}
            onSearch={(criteria) => dispatch(actions.fetch(criteria))}
            onAdd={() => { dispatch(actions.add()); props.navigate('/users/0')} }
            onClose={() => {dispatch(actions.close()); props.navigate('/users') }}
            onSave={(user) => dispatch(actions.save(user))}
            onDelete={(id) => {dispatch(actions.deleteEntity(id)); } }
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default UserContainer