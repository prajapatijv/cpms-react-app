import React, { useEffect, useCallback } from 'react'
import { useMappedState, useDispatch, } from "redux-react-hook";

import ItemList from '../../components/item/item-list'
import * as actions from './actions'

const ItemContainer = () => {

    const dispatch = useDispatch()

    const mapState = useCallback(
        state => ({
            items: state.itemState.items,
            item: state.itemState.item,
            fetching: state.itemState.fetching,
            saving: state.itemState.saving,
            deleting: state.itemState.deleting
        }),
    );

    const { items, item, fetching, saving, deleting } = useMappedState(mapState)

    useEffect(() => {
        dispatch(actions.fetch(""))
    }, []);

    return (
        <ItemList
            items={items}
            item={item}
            onSelect={(id) => dispatch(actions.select(id))}
            onSearch={(criteria) => dispatch(actions.fetch(criteria))}
            onAdd={() => dispatch(actions.add())}
            onClose={() => dispatch(actions.close())}
            onSave={(item) => dispatch(actions.save(item))}
            onDelete={(id) => dispatch(actions.deleteEntity(id))}
            fetching={fetching}
            saving={saving}
            deleting={deleting}
        />
    )
}

export default ItemContainer