import React from 'react'
import PageTitle from '../shared/page-title'
import SearchBar from '../shared/search-bar'
import UserForm from './user-form'

const UserList = () => 
    <div className="user-page">
        <PageTitle title="Users"></PageTitle>
        <div className="row full-height py-0" >
            <UserLines />
            <UserForm />
        </div>
    </div>


const UserLines = () => 
    <div className="col-md-4 right-border">
        <SearchBar />
        <ul className="list-group list-group-flush">
            <li className="cpms-list-item">User 1</li>
            <li className="cpms-list-item">User 2</li>
            <li className="cpms-list-item">User 3</li>
            <li className="cpms-list-item">User 14</li>
            <li className="cpms-list-item">User 1201</li>
        </ul>
    </div>

export default UserList;