import React from 'react'
import PageTitle from '../shared/page-title'
import SearchBar from '../shared/search-bar'
import UserForm from './user-form'

const UserList = ({ users, onSelect }) => 
    <div className="user-page">
        <PageTitle title="Users"></PageTitle>
        {console.log(users)}
        <div className="row full-height py-0" >
            <UserLines users={users} />
            <UserForm onSelect={onSelect}/>
        </div>
    </div>


const UserLines = ({ users , onSelect }) => 
    <div className="col-md-4 right-border">
        <SearchBar />
        <ul className="list-group list-group-flush">
        {
            users.map((user, i) => 
                <button key={i} 
                    onClick={onSelect}
                    className="cpms-list-item list-group-item-action">{user.firstName}
                </button>
                )
        }
        </ul>
    </div>

export default UserList;