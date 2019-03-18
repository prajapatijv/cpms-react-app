import React from 'react';

const SearchBar = () =>
    <div className="input-group">
        <input type="text" className="form-control cpms-search" 
                placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
            <button className="btn cpms-button" type="button">+</button>
        </div>
    </div>

export default SearchBar
