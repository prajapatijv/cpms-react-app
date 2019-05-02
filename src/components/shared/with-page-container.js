import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { useMappedState, useDispatch } from "redux-react-hook"
import { GetContext } from '../../AppConfig'

const WithPageContainer = (WrappedComponent, actions, props, context ) => {
    const contextObj = GetContext(context);
    //Exapmles: userState, itemState
    const stateName = `${contextObj.actionContextSingular.toLocaleLowerCase()}State`
    //Exapmles: users, items
    const listName = contextObj.actionContextPlural.toLocaleLowerCase()
    //Exapmles: user, item
    const entityName  = contextObj.actionContextSingular.toLocaleLowerCase()

    const mapActions = bindActionCreators(actions, useDispatch());

    const mapState = useCallback(
        state => ({
            [listName]: state[stateName][listName],
            [entityName]: (props.id === undefined || state[stateName].item !== undefined) ? 
                                state[stateName][entityName] : 
                                state[stateName][listName].find(u => u.id === parseInt(props.id)),
            fetching: state[stateName].fetching,
            saving: state[stateName].saving,
            deleting: state[stateName].deleting
        }),
    [props.id || ""])

    const state = useMappedState(mapState)

    useEffect(() => {
        mapActions.fetch("")
    }, []);

    return (
        <WrappedComponent
            {...state}
            onSearch={mapActions.fetch}
            onAdd={() => { mapActions.add(); props.navigate(`/${listName}/0`)} }
            onClose={() => {mapActions.close(); props.navigate(`/${listName}`) }}
            onSave={mapActions.save}
            onDelete={mapActions.deleteEntity}
        />
    )
}

export default WithPageContainer