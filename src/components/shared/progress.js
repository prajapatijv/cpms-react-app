import React from 'react';

export const Spinner = ({ show }) =>
  show ?
    <div class="d-flex justify-content-center cpms-spinner">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  : null


export const Progress = ({ show }) =>
  show ?
    <div class="progress cpms-progress-bar">
      <div class="progress-bar progress-bar-striped bg-secondary progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  : null
