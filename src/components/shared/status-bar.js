import React, { useEffect} from 'react';
import classNames from 'classnames';

const StatusBar = ({status,  clearAll}) => {

    const hasErrors = (status.errors && status.errors.length > 0) 
    const hasInfos = (status.infos && status.infos.length > 0) 

    useEffect(() => {
        let timer = setTimeout(() => {clearAll()}, 9000)

        return() => {
            clearTimeout(timer)
        }
    })

    var cls = classNames({
        'alert alert-dismissible fade show app-alert': true,
        'alert-danger': hasErrors,
        'alert-info': hasInfos
    })

    return (
     (hasInfos || hasErrors) &&
     <div className={cls} role="alert">
        <strong className="alert-heading">
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