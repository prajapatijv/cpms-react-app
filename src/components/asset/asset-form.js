import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const AssetForm = ({ asset, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...asset }

    const schema = Yup.object().shape({
        id:Yup.number(),
        assetType: Yup.string().min(2).max(10).required(),
        fileName: Yup.string().min(2).max(2000).required(),
        fileSizeBytes: Yup.number().required(),
        title: Yup.string().min(2).max(100).required(),
        description: Yup.string().notRequired(),
        transcripts: Yup.string().notRequired(),
        author: Yup.string().notRequired(),
        categories: Yup.array().required(),
        tags: Yup.array().required(),
        recordDate: Yup.date().notRequired(),
        quality: Yup.string().notRequired(),
        mediaType: Yup.string().notRequired(),
        compressionFormat: Yup.string().notRequired()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        asset ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Asset" fetching={props.fetching} onClose={onClose}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <Field type="text" name="firstName" component={InputBox} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <Field type="text" name="lastName" component={InputBox} />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="userName">Username</label>
                                <Field type="text" name="userName" component={InputBox} prefix="@" />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" component={InputBox} />
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Must be 6-15 characters long, contains letters and numbers.
                                </small>
                            </div>

                            <ButtonBar
                                showDelete={asset.id !== 0}
                                onDelete={(id) => onDeleteEntity(asset.id)}
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

export default AssetForm

AssetForm.propTypes = {
    asset: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}