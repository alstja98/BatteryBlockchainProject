import React from 'react';

const DataFlow = () => {

  return (
    <div className="middle">
      <div className="title">
        Data Flow using Matlab Simulink
      </div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'25px'}}>
      <video autoPlay loop muted preload="auto" width="70%" height="70%">
       <source src={require("../../images/dataflow.mp4")} type="video/mp4"/>
        video error
      </video>
      </div>
    </div>
  );
};

export default DataFlow;
