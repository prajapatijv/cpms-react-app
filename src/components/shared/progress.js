import React from 'react';

export const Spinner = ({ show }) =>
  show ?
    <div className="d-flex justify-content-center app-spinner">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  : null