import React from 'react'
import { useMappedState, useDispatch } from "redux-react-hook";

import LoginPage from '../../components/login/login-page'
import * as actions from './actions'

const Login = (props) => {
    
    const dispatch = useDispatch()

    return(
        <LoginPage {...props}
            onLogin={() => dispatch(actions.login())}
        />
    )
} 

export default Login