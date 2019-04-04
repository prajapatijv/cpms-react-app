import React from 'react'
import PageTitle from '../shared/page-title'
import SearchBar from '../shared/search-bar'
import UserForm from './user-form'
import { Spinner } from '../shared/progress'

const UserList = (props) => 
    <div className="app-page user-page">
        <PageTitle title="Users" fetching={props.fetching}></PageTitle>
        <div className="row no-gutters full-height px-0" >
            <UserLines {...props} />
            <UserForm {...props} />
        </div>
    </div>


const UserLines = ({ users , onSelect, onAdd , onSearch, fetching}) => 
    <div className="col-md-4 right-border app-list">
        <SearchBar onAdd={onAdd} onSearch={onSearch}/>
        <Spinner show={fetching}/> 
        <ul className="list-group list-group-flush">
        {
            !fetching && 
            users.map((user) => 
                <button key={user.id} 
                    onClick={() => onSelect(user.id)}
                    className="cpms-list-item list-group-item-action"
                    >{user.firstName} {user.lastName}
                </button>
                )
        }
        </ul>
    </div>

export default UserList;