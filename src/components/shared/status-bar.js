import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

const StatusBar = ({status,  clearAll}) => {

    const hasErrors = (status.errors && status.errors.length > 0) 
    const hasInfos = (status.infos && status.infos.length > 0) 

    const [show, setShow] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => {clearAll(); setShow(false)}, 9000)

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
    (show && (hasInfos || hasErrors)) &&
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