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
        <div className="modal-header mb-3 py-0">
        Login form
    </div>

        /*<Formik validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onLogin}>
                    render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            Login form
                        </div>
                    </React.Fragment>
                )}
        </Formik>*/
    )
}

export default LoginForm