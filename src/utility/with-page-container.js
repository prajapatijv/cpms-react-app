import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { useMappedState, useDispatch } from "redux-react-hook"
import applyActionTemplate from './action-template'


const WithPageContainer = (WrappedComponent, props, context ) => {

    const contextObj = props.config.mappings[context]

    //Exapmles: userState, itemState
    const stateName = `${contextObj.actionContext.singular}State`
    //Exapmles: users, items
    const listName = contextObj.actionContext.plural
    //Exapmles: user, item
    const entityName  = contextObj.actionContext.singular

    //Generate actions
    const actions = applyActionTemplate(contextObj, props.config)

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