import React from 'react'
import { Feather }  from 'react-feather'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types';

import { InputBox } from '../shared/input-box'

const LoginForm = () => {

    const schema = Yup.object().shape({
        userName: Yup.string().min(2).max(30).required(),
        password: Yup.string().min(6).max(15).required()
    })

    const onLogin = (values, actions) => {
        actions.setSubmitting(false)
    }

    return (
            <Formik
                enableReinitialize
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onLogin}
                render={props => (
                    <React.Fragment>
                        <form className="login-form needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <Feather size="42px" className="mb-3" />
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-label-group">
                                <Field type="text" name="userName" component={InputBox} placeholder="User name" floatinglabel="1"/>
                            </div>
                            <div className="form-label-group">
                                <Field type="text" name="password" component={InputBox} placeholder="Password" floatinglabel="1"/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>                            
                            <p className="mt-5 mb-3 text-muted">© 2019</p>
                        </form>
                    </React.Fragment>
                )}
            />
    )
}

export default LoginForm

LoginForm.propTypes = {
    onLogin: PropTypes.func
}