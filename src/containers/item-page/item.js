import React, { useEffect, useCallback } from 'react'
import { bindActionCreators } from 'redux';
import { useMappedState, useDispatch, } from "redux-react-hook";

import ItemPage from '../../components/item/item-page'
import * as actions from './actions'

const ItemContainer = (props) => {

    const mapActions = bindActionCreators(actions, useDispatch());

    const mapState = useCallback(
        state => ({
            items: state.itemState.items,
            item: (props.itemId === undefined || state.itemState.item !== undefined) ? state.itemState.item : state.itemState.items.find(u => u.id === parseInt(props.itemId)),
            fetching: state.itemState.fetching,
            saving: state.itemState.saving,
            deleting: state.itemState.deleting
        }),
    [props.itemId || ""]);

    const { items, item, fetching, saving, deleting } = useMappedState(mapState)

    useEffect(() => {
        mapActions.fetch("")
    }, []);

    return (
        <ItemPage
            items={items}
            item={item}
            onSearch={mapActions.fetch}
            onAdd={() => { mapActions.add(); props.navigate('/items/0')} }
            onClose={() => {mapActions.close(); props.navigate('/items') }}
            onSave={mapActions.save}
            onDelete={mapActions.deleteEntity}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default ItemContainer