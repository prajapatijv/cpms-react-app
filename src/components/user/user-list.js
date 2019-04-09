import React from 'react'

import SearchBar from '../shared/search-bar'
import UserForm from './user-form'
import { Spinner } from '../shared/progress'

const UserList = (props) => 
    <div className="app-page user-page py-3">
        <div className="row no-gutters full-height px-0" >
            <div className="col-md-4 right-border app-list">
                <UserLines {...props} />
            </div>
            <div className="col-md-6 app-form">
                <UserForm {...props} />
            </div>
        </div>
    </div>


const UserLines = ({ users , onSelect, onAdd , onSearch, fetching}) => 
    <React.Fragment>
        <SearchBar onAdd={onAdd} onSearch={onSearch} placeholder="Search users"/>
        <Spinner show={fetching}/> 
        <ul className="list-group list-group-flush">
        {
            !fetching && 
            users.map((user) => 
                <button key={user.id} 
                    onClick={() => onSelect(user.id)}
                    className="app-list-item list-group-item-action"
                    >{user.firstName} {user.lastName}
                </button>
                )
        }
        </ul>
    </React.Fragment>

export default UserList;