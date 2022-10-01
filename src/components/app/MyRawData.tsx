import React from 'react';
import $ from 'jquery';
import './MyRawData.scss';

const MyData = () => {
  

  return (
    <div className="middle">
      <div className="title">
        [My] Battery Raw Data
      </div>

      <div className="container" >
        
        <input type="text" id="search" className="input-query" placeholder="원하는 시간을 입력하세요." />
      </div>
    </div>
  );
};

export default MyData;
