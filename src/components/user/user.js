import React from 'react'

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
            
            <div class="btn-group  btn-group float-right" role="group" >
                <button type="button" class="btn cpms-button">Cancel</button>
                <button type="button" class="btn cpms-button">Save</button>
            </div>
        </form>
    </div>

export default User