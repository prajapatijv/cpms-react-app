import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux';
import { useMappedState, useDispatch } from "redux-react-hook"

import UserPage from '../../components/user/user-page'
import * as actions from './actions'

const UserContainer = (props) => {

    /*const load = useCallback(
        () => dispatch(actions.fetchUsers(""))
    );*/

    const mapActions = bindActionCreators(actions, useDispatch());

    const mapState = useCallback(
        state => ({
            users: state.userState.users,
            user: (props.userId === undefined || state.userState.user !== undefined) ? state.userState.user : state.userState.users.find(u => u.id === parseInt(props.userId)),
            fetching: state.userState.fetching,
            saving: state.userState.saving,
            deleting: state.userState.deleting
        }),
    [props.userId || ""]);

    const { users, user, fetching, saving, deleting } = useMappedState(mapState)

    useEffect(() => {
        mapActions.fetch("");
    }, []);

    return (
        <UserPage
            users={users}
            user={user}
            onSearch={mapActions.fetch}
            onAdd={() => { mapActions.add(); props.navigate('/users/0')} }
            onClose={() => {mapActions.close(); props.navigate('/users') }}
            onSave={mapActions.save}
            onDelete={mapActions.deleteEntity}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default UserContainer