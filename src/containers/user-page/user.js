import React, { useEffect, useCallback } from 'react'
import { useMappedState, useDispatch, } from "redux-react-hook";

import UserList from '../../components/user/user-list'
import * as actions from './actions'

const UserContainer = () => {

    const dispatch = useDispatch()
    /*const load = useCallback(
        () => dispatch(actions.fetchUsers(""))
    );*/

    const mapState = useCallback(
        state => ({
            users: state.userState.users,
            user: state.userState.user,
            fetching: state.userState.fetching,
            saving: state.userState.saving,
            deleting: state.userState.deleting
        }),
    );

    const { users, user, fetching, saving, deleting } = useMappedState(mapState)

    useEffect(() => {
        dispatch(actions.fetch(""))
    }, []);

    return (
        <UserList
            users={users}
            user={user}
            onSelect={(id) => dispatch(actions.select(id))}
            onSearch={(criteria) => dispatch(actions.fetch(criteria))}
            onAdd={() => dispatch(actions.add())}
            onClose={() => dispatch(actions.close())}
            onSave={(user) => dispatch(actions.save(user))}
            onDelete={(id) => dispatch(actions.deleteEntity(id))}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default UserContainer