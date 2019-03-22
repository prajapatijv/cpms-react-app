import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import ButtonBar from '../shared/button-bar'

const UserForm = ({user , onCancel, onSave, onDelete}) => {

    const userSchema =  Yup.object().shape({
        firstName: Yup.string().min(5).max(50).required(),
        lastName: Yup.string().min(5).max(50).required(),
        userName: Yup.string().min(5).max(30).required(),
        password: Yup.string().min(6).max(15).required()
    })

    const onSaveUser= (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteUser= (id) => {
        onDelete(id)
    }

    return (
    user &&
    <Formik
        enableReinitialize
        initialValues={user}
        validationSchema={userSchema}
        validateOnBlur={true}
        onSubmit={onSaveUser}
        render={ props => (
        <div className="col-md-6">
            <form className="needs-validation" 
                onSubmit={props.handleSubmit}
                onReset={props.handleReset}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" name="firstName" 
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.firstName}/>
                        <ErrorMessage name="firstName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" name="lastName" 
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.lastName}/>
                        <ErrorMessage name="lastName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" name="userName" placeholder="Username" 
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.userName}/>
                        <ErrorMessage name="userName">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>                            
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" 
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}/>
                    <ErrorMessage name="password">{msg => <div className="invalid-tooltip show">{msg}</div>}</ErrorMessage>                                                                        
                </div>

                <ButtonBar onCancel={onCancel} 
                            showDelete={user.id !== 0} 
                            onDelete={(id) => onDeleteUser(user.id)}
                            />
            </form>
        </div>
        )}
    />
    )
}

export default UserForm