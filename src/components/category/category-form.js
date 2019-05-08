import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const CategoryForm = ({ category, onClose, onSave, onDelete, saving, deleting }) => {

    const _category = { ...category }

    const categorySchema = Yup.object().shape({
        id:Yup.number(),
        name: Yup.string().min(2).max(50).required(),
        shortName: Yup.string().min(2).max(50).required(),
        active: Yup.boolean().notRequired()
    })

    const onSaveAction = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteAction = (id) => {
        onDelete(id)
    }


    return (
        category ?
            <Formik
                enableReinitialize
                initialValues={_category}
                validationSchema={categorySchema}
                validateOnBlur={true}
                onSubmit={onSaveAction}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Category" fetching={props.fetching} onClose={onClose}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="shortName">Short Name</label>
                                <Field type="text" name="shortName" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="checkbox" name="active" component={CheckBox} label="Active" />
                            </div>

                            <ButtonBar
                                showDelete={category.id !== 0}
                                onDelete={(id) => onDeleteAction(category.id)}
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

export default CategoryForm

CategoryForm.propTypes = {
    category: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}