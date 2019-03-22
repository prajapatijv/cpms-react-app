import React from 'react';

const StatusBar = ({show}) =>
    show ?
    <div class="alert alert-danger alert-dismissible fade show cpms-alert" role="alert">
        <strong>Error!</strong> We are facing some issue.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div> :
    null


export default StatusBar