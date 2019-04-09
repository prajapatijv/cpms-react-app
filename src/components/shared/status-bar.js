import React, { useEffect} from 'react';
import classNames from 'classnames';
import Icon from '../shared/icon'
import PropTypes from 'prop-types'

const StatusBar = ({status,  clearAll}) => {

    const hasErrors = (status.errors && status.errors.length > 0) 
    const hasInfos = (status.infos && status.infos.length > 0) 

    useEffect(() => {
        let timer = setTimeout(() => {clearAll()}, 2000)

        return() => {
            clearTimeout(timer)
        }
    })

    var cls = classNames({
        'status-bar alert alert-dismissible fade show app-alert bg-dark': true,
        'alert-danger': hasErrors,
        'alert-info': hasInfos
    })

    return (
    
     <div className={cls} role="alert">
        <Icon icon="check-circle" />
        <strong className="alert-heading text-light">
        Saved
            {hasErrors ? status.errors.join(" ") : status.infos.join(" ")}  
        </strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" 
            onClick={() => clearAll()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div> 
    )
}

export default StatusBar

StatusBar.propTypes = {
    status: PropTypes.object,
    clearAll: PropTypes.func
}