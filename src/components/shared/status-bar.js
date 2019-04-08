import React from 'react';

const StatusBar = ({messages,  clearMessages}) =>
    (messages && messages.length > 0) ?
    <div className="alert alert-danger alert-dismissible fade show app-alert" role="alert">
        <strong className="alert-heading">Error!  </strong>
            {messages.join(" ")}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" 
            onClick={() => clearMessages()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div> :
    null

export default StatusBar