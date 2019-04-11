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
            saving:  state.userState.saving, 
            deleting:  state.userState.deleting
        }),
    );

    const { users , user, fetching, saving, deleting } = useMappedState(mapState)
    
    useEffect(() => {
        dispatch(actions.fetchUsers(""))
    },[]);

    return (
        <UserList
            users={users}
            user={user}
            onSelect={(id) => dispatch(actions.selectUser(id))}
            onSearch={(criteria) => dispatch(actions.fetchUsers(criteria))}
            onAdd={() => dispatch(actions.addUser())}
            onClose={() => dispatch(actions.closeUser())}
            onSave={(user) => dispatch(actions.saveUser(user))}
            onDelete={(id) => dispatch(actions.deleteUser(id))}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default UserContainer