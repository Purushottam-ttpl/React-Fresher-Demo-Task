import React from 'react';
import './UnAuthorize.css';
import { Navigate, useNavigate } from 'react-router-dom';

const UnAuthorize = () => {

  return (
    <div className="not-found">
      <h1>UnAuthorize</h1>
      <h2>Please Select Proper Role...!</h2>
      <p>Can't give you access...!</p>
      <button onClick={() => window.history.back()}>Go Back</button>

    </div>
  );
};

export default UnAuthorize;