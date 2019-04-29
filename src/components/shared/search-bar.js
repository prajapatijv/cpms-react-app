import React from 'react';
import PropTypes from 'prop-types'

const SearchBar = ({ onAdd, onSearch, placeholder }) =>
    <div className="input-group">
        <input type="text" className="form-control app-search"
            placeholder={placeholder} aria-label={placeholder}
            onChange={(e) => onSearch(e.target.value)} />
        <div className="input-group-append">
            <button className="btn app-button" type="button" onClick={() => onAdd()}>+</button>
        </div>
    </div>

export default SearchBar

SearchBar.propTypes = {
    onAdd: PropTypes.func,
    onSearch: PropTypes.func,
    placeholder: PropTypes.string
}
