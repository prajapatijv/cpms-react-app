import React from 'react';

const SearchBar = ({onAdd, onSearch}) =>
    <div className="input-group">
        <input type="text" className="form-control cpms-search" 
                placeholder="Search" aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}/>
        <div className="input-group-append">
            <button className="btn app-button" type="button" onClick={() => onAdd()}>+</button>
        </div>
    </div>

export default SearchBar
