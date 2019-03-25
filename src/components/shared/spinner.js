import React from 'react';

const Spinner  = ( { show } ) => 
show ? 
<div class="d-flex justify-content-center">
    <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div>        
: null

export default Spinner