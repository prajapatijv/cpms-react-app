import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import * as Yup from 'yup'

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
                        <div className="modal-header">
                            Login
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <label htmlFor="userName">User name</label>
                                <Field type="text" name="userName" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="password">Password</label>
                                <Field type="text" name="password" component={InputBox} />
                            </div>
                        </form>
                    </React.Fragment>
                )}
            />
    )
}

export default LoginForm