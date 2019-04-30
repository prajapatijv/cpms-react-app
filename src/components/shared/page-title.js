import React from 'react'
import { X } from 'react-feather'
import PropTypes from 'prop-types'

const PageTitle = ({ title, onClose }) =>
    <React.Fragment>
        <div className="page-title">
            <h4 >{title}</h4>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={() => onClose()}>
            <span aria-hidden="true">
                <X/>
            </span>
        </button>
    </React.Fragment>

export default PageTitle;

PageTitle.propTypes = {
    title: PropTypes.string
}