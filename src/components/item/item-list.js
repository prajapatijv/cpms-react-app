import React from 'react'

import SearchBar from '../shared/search-bar'
import ItemForm from './item-form'
import { Spinner } from '../shared/spinner'

const ItemList = (props) => 
    <div className="app-page item-page py-3">
        <div className="row no-gutters  px-0" >
            <div className="col-md-4 app-list">
                <ItemLines {...props} />
            </div>
            <div className="col-md-6 app-form">
                <ItemForm {...props} />
            </div>
        </div>
    </div>


const ItemLines = ({ items , onSelect, onAdd , onSearch, fetching}) => 
    <React.Fragment>
        <SearchBar onAdd={onAdd} onSearch={onSearch} placeholder={fetching ? "Fetching items" : "Search items" }/>
        <Spinner show={fetching}/> 
        <ul className="list-group list-group-flush">
        {
            !fetching && 
            items.map((item) => 
                <button key={item.id} 
                    onClick={() => onSelect(item.id)}
                    className="app-list-item list-group-item-action"
                    >{item.itemName}
                </button>
                )
        }
        </ul>
    </React.Fragment>

export default ItemList;