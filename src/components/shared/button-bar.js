import React from 'react';

const ButtonBar = ( { onCancel , onSave, showDelete, onDelete} ) => 
<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
    <DeleteButton showDelete={showDelete} onDelete={onDelete}/>
    <div className="btn-group  float-right" role="group" >
        <button type="button" className="btn cpms-button" onClick={() => onCancel()}>Cancel</button>
        <button type="button" className="btn cpms-button" onClick={() => onSave()}>Save</button>
    </div>
</div>


const DeleteButton = ({showDelete, onDelete}) => 
    <div className="btn-group" role="group" aria-label="Delete">
        {showDelete ?
         <button type="button" className="btn cpms-button" onClick={()=>onDelete()}>Delete</button> 
         : <div />
        }
    </div>

export default ButtonBar
