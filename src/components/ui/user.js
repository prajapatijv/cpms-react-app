import React from 'react'

const User = () =>
    <div className="col-md-6">
        <form class="needs-validation" novalidate="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                        Valid first name is required.
            </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                        Valid last name is required.
        </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required="" />
                    <div class="invalid-feedback" styleName="width: 100%;">
                        Your username is required.
            </div>
                </div>
            </div>
            <hr />
            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

        </form>
    </div>

export default User