import React from 'react';

const StatusBar = ({errors, clearErrors}) =>
    (errors && errors.length > 0) ?
    <div className="alert alert-danger alert-dismissible fade show cpms-alert" role="alert">
        <strong class="alert-heading">Error!  </strong>
            {errors.join(" ")}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" 
            onClick={() => clearErrors()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div> :
    null

export default StatusBar