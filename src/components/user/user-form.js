import React from 'react'
import { Formik } from 'formik'

import ButtonBar from '../shared/button-bar'

const UserForm = ({user , onCancel, onSave, onDelete}) => {

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
        onSubmit={onSaveUser}
        render={ props => (
        <div className="col-md-6">
            <form className="needs-validation" 
                onSubmit={props.handleSubmit}
                onReset={props.handleReset}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" 
                            onChange={props.handleChange}
                            value={props.values.firstName}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" 
                            onChange={props.handleChange}
                            value={props.values.lastName}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="Username" 
                            onChange={props.handleChange}
                            value={props.values.userName}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" 
                        onChange={props.handleChange}
                        value={props.values.password}/>
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