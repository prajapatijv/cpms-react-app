import React from 'react';

const ButtonBar = ( { onCancel , onSave} ) => 
<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn cpms-button">Delete</button>
    </div>
    <div className="btn-group  float-right" role="group" >
        <button type="button" className="btn cpms-button" onClick={() => onCancel()}>Cancel</button>
        <button type="button" className="btn cpms-button" onClick={() => onSave()}>Save</button>
    </div>
</div>

export default ButtonBar
