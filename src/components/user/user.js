import React from 'react'
import ButtonBar from '../shared/button-bar'

const User = () =>
    <div className="col-md-6">
        <form className="needs-validation" noValidate="">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" />
                </div>
            </div>
            <div className="mb-3">
                <label for="username">Username</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username"/>
                </div>
            </div>
            <div className="mb-3">
                <label for="firstName">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            
            <ButtonBar />
        </form>
    </div>

export default User