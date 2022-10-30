import React from 'react';
import $ from 'jquery';
import '../scss/AllRawData.scss';
import MaterialTable from '../js/alldata.js';

const AllData = () => {
  
  return (
    <div className="middle">
      <div className="title">
        [All] Battery Raw Data
      </div>

      <div className="container" >
        <input type="text" id="search" className="input-query" placeholder="원하는 시간을 입력하세요." />
      </div>

      <div className="table">
        <MaterialTable />
      </div>
    </div>
  );
};

export default AllData;
