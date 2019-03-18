import React from 'react'
import ButtonBar from '../shared/ButtonBar'

const User = () =>
    <div className="col-md-6">
        <form class="needs-validation" noValidate="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" />
                </div>
            </div>
            <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username"/>
                </div>
            </div>
            <div class="mb-3">
                <label for="firstName">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            
            <ButtonBar />
        </form>
    </div>

export default User