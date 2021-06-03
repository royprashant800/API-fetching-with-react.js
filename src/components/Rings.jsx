// Loader svg-icon while fetching API.

import React from 'react';
import Loader from "react-loader-spinner";

export default class Rings extends React.Component {
  render() {
    return (
      <div className="main_loader">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={1000}
        />
      </div>
    );
  }
}

