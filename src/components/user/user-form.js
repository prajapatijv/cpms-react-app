import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import ButtonBar from '../shared/button-bar'

const UserForm = ({ user, onClose, onSave, onDelete, saving, deleting }) => {

    const _user = { ...user }

    const userSchema = Yup.object().shape({
        firstName: Yup.string().min(2).max(50).required(),
        lastName: Yup.string().min(2).max(50).required(),
        userName: Yup.string().min(2).max(30).required(),
        password: Yup.string().min(6).max(15).required()
    })

    const onSaveUser = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteUser = (id) => {
        onDelete(id)
    }


    return (
        user ?
            <Formik
                enableReinitialize
                initialValues={_user}
                validationSchema={userSchema}
                validateOnBlur={true}
                onSubmit={onSaveUser}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header px-0 py-0">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => onClose()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>            
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="firstName"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.firstName} />
                                        <ErrorMessage name="firstName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="lastName"
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            value={props.values.lastName} />
                                        <ErrorMessage name="lastName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="userName">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" className="form-control" name="userName" placeholder="Username"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.userName} />
                                    <ErrorMessage name="userName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input type="password" className="form-control" name="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password} />
                                    <ErrorMessage name="password">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                                </div>
                            </div>

                            <ButtonBar 
                                showDelete={user.id !== 0}
                                onDelete={(id) => onDeleteUser(user.id)}
                                saving={saving}
                                deleting={deleting}
                                dirty={props.dirty}
                                isValid={props.isValid}
                            />
                        </form>
                    </React.Fragment>
                )}
            /> : null
    )
}

export default UserForm