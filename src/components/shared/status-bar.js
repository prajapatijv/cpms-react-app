import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './status-bar.scss'

const Statusbar = ({ status, clearErrors, clearInfos }) => {

    const hasErrors = (status.errors && status.errors.length > 0)
    const hasInfos = (status.infos && status.infos.length > 0)

    if (hasInfos) {
        useEffect(() => {
            let timer = setTimeout(() => {clearInfos()}, 2000)

            return() => {
                clearTimeout(timer)
            }
        })
    }

    return (
        <React.Fragment>
            <Error hasErrors={hasErrors} status={status} clearErrors={clearErrors} />
            <Info hasInfos={hasInfos} status={status} clearInfos={clearInfos} />
        </React.Fragment>
    )
}

export default Statusbar

const Error = ({hasErrors,  status, clearErrors}) =>
    hasErrors && 
    <div className="alert alert-dismissible fade show app-alert alert-warning" role="alert">
        <strong className="alert-heading">
            Error: 
            {status.errors.join(" ")}
        </strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
            onClick={() => clearErrors()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    

const Info = ({hasInfos, status, clearInfos}) =>
    hasInfos && 
    <div className="toast-info alert alert-dismissible fade show app-alert bg-dark" role="alert">
        <strong className="alert-heading text-light">
            {status.infos.join(" ")}
        </strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
            onClick={() => clearInfos()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>


Statusbar.propTypes = {
    status: PropTypes.object,
    clearErrors: PropTypes.func,
    clearInfos: PropTypes.func
}