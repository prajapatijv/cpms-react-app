import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const ItemForm = ({ item, onClose, onSave, onDelete, saving, deleting }) => {

    const itemSchema = Yup.object().shape({
        id:Yup.number(),
        itemName: Yup.string().min(2).max(50).required(),
        rate: Yup.number().required(),
        type: Yup.string().min(2).max(30).required(),
        stock: Yup.number()
    })

    const onSaveItem = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteItem = (id) => {
        onDelete(id)
    }


    return (
        item ?
            <Formik
                enableReinitialize
                initialValues={item}
                validationSchema={itemSchema}
                validateOnBlur={true}
                onSubmit={onSaveItem}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Item" fetching={props.fetching} onClose={onClose}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <label htmlFor="itemName">Item name</label>
                                <Field type="text" name="itemName" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="rate">Rate</label>
                                <Field type="number" name="rate" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="type">Type</label>
                                <Field type="text" name="type" component={InputBox} />
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="Stock">Stock</label>
                                <Field type="number" name="stock" component={InputBox} />
                            </div>

                            <ButtonBar
                                showDelete={item.id !== 0}
                                onDelete={(id) => onDeleteItem(item.id)}
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

export default ItemForm

ItemForm.propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}