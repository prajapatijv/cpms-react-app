import React from 'react';

export const Spinner = ({ show }) =>
  show ?
    <div className="d-flex justify-content-center cpms-spinner">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  : null


export const Progress = ({ show }) =>
  show ?
    <div className="progress cpms-progress-bar">
      <div className="progress-bar progress-bar-striped bg-secondary progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  : null
