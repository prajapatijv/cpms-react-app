import React from 'react';
import User from './user'

const UserPage = () => 
    <div>
        <h4>Users</h4>
        <hr/>
        <div className="row full-height py-0" >
            <Users />
            <User />
        </div>
    </div>


const Users = () => 
    <div className="col-md-4 right-border">
        <ul className="list-group list-group-flush">
            <li className="cpms-list-item">User 1</li>
            <li className="cpms-list-item">User 2</li>
            <li className="cpms-list-item">User 3</li>
            <li className="cpms-list-item">User 14</li>
            <li className="cpms-list-item">User 1201</li>
        </ul>
    </div>

export default UserPage;