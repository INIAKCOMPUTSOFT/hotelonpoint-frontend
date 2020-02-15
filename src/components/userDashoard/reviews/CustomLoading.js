import React from "react";
import spin from '../../../logo/spinner.gif';

export default function CustomLoading() {
  return (
    <div className="center-div">
      <img src={spin} alt="Loading..." />
    </div>
  );
}