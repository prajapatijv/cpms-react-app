import React from 'react'
import PageTitle from '../shared/page-title'
import SearchBar from '../shared/search-bar'
import UserForm from './user-form'
import Spinner from '../shared/spinner'

const UserList = ({ users, user, onSelect, onSearch, onAdd, onCancel, onSave, onDelete, fetching}) => 
    <div className="user-page">
        <PageTitle title="Users"></PageTitle>
        <div className="row full-height py-0" >
            <UserLines users={users} onSelect={onSelect} onSearch={onSearch} onAdd={onAdd} fetching={fetching}/>
            <UserForm user={user} onCancel={onCancel} onSave={onSave} onDelete={onDelete} />
        </div>
    </div>


const UserLines = ({ users , onSelect, onAdd , onSearch, fetching}) => 
    <div className="col-md-4 right-border">
        <SearchBar onAdd={onAdd} onSearch={onSearch}/>
        <ul className="list-group list-group-flush">
        {
            users.map((user) => 
                <button key={user.id} 
                    onClick={() => onSelect(user.id)}
                    className="cpms-list-item list-group-item-action">{user.firstName} {user.lastName}
                </button>
                )
        }
        </ul>
        <Spinner show={fetching}/>
    </div>

export default UserList;