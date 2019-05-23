import React from 'react'

import LoginForm from './login-form'

const LoginPage = (props) =>
<div className="login-container text-center bg-light">
    <div className="py-5">
        <LoginForm {...props} />
    </div>
</div>


export default LoginPage