import React from 'react';
import User from './user'

const UserComponent = () => 
    <div className="row" >
        <Users />
        <User />
    </div>


const Users = () => 
    <div className="col-md-4">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">User 1</li>
            <li class="list-group-item">User 2</li>
            <li class="list-group-item">User 3</li>
            <li class="list-group-item">User 14</li>
            <li class="list-group-item">User 1201</li>
        </ul>
    </div>

export default UserComponent;