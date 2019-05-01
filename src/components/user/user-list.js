import React from 'react'

import SearchBar from '../shared/search-bar'
import UserForm from './user-form'
import { Spinner } from '../shared/spinner'
import NavLink from '../shared/navlink';

const UserList = (props) => 
    <div className="app-page user-page py-3">
        <div className="row no-gutters  px-0" >
            <div className="col-md-4 app-list">
                <UserLines {...props} />
            </div>
            <div className="col-md-6 app-form">
                <UserForm {...props} />
            </div>
        </div>
    </div>


const UserLines = ({ users , onAdd , onSearch, fetching}) => 
    <React.Fragment>
        <SearchBar onAdd={onAdd} onSearch={onSearch} placeholder={fetching ? "Fetching users" : "Search users" }  />
        <Spinner show={fetching}/> 
        <ul className="list-group list-group-flush">
        {
            !fetching && 
            users.map((user) => 
                <NavLink key={user.id} 
                    to={`/users/${user.id}`}
                    activeClassName="active"
                    className="app-list-item list-group-item-action"
                    >{user.firstName} {user.lastName}
                </NavLink>
                )
        }
        </ul>
    </React.Fragment>

export default UserList;