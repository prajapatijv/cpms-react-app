import React from 'react'
import PageTitle from '../shared/page-title'
import User from './user'

const UserPage = () => 
    <div className="user-page">
        <PageTitle title="Users"></PageTitle>
        <div className="row full-height py-0" >
            <Users />
            <User />
        </div>
    </div>


const Users = () => 
    <div className="col-md-4 right-border">
        <div class="input-group">
            <input type="text" class="form-control cpms-search" placeholder="Search" aria-label="Search" aria-describedby="button-addon4" />
            <div class="input-group-append" id="button-addon4">
                <button class="btn cpms-button" type="button">+</button>
            </div>
        </div>  
          
        <ul className="list-group list-group-flush">
            <li className="cpms-list-item">User 1</li>
            <li className="cpms-list-item">User 2</li>
            <li className="cpms-list-item">User 3</li>
            <li className="cpms-list-item">User 14</li>
            <li className="cpms-list-item">User 1201</li>
        </ul>
    </div>

export default UserPage;