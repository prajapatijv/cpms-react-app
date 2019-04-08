import React from 'react';
import { stat } from 'fs';

const StatusBar = ({status,  clearAll}) => {
    const hasErrors = (status.errors && status.errors.length > 0) 
    const hasInfos = (status.infos && status.infos.length > 0) 
    return (
    (hasInfos || hasErrors) &&
     <div className="alert alert-danger alert-dismissible fade show app-alert" role="alert">
        <strong className="alert-heading">{hasErrors ? "Error" : "Info"}  </strong>
            {status.errors.join(" ")}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" 
            onClick={() => clearAll()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div> 
    )
}

export default StatusBar