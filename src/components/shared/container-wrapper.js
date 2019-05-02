import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux'
import { useMappedState, useDispatch } from "redux-react-hook"

const ContainerWrapper = (WrappedComponent, actions, props, stateName, listName, entityName ) => {

    const mapActions = bindActionCreators(actions, useDispatch());

    const mapState = useCallback(
        state => ({
            items: state[stateName][listName],
            item: (props.itemId === undefined || state[stateName].item !== undefined) ? 
                                state[stateName][entityName] : 
                                state[stateName][listName].find(u => u.id === parseInt(props.itemId)),
            fetching: state[stateName].fetching,
            saving: state[stateName].saving,
            deleting: state[stateName].deleting
        }),
    [props.itemId || ""])

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

export default ContainerWrapper