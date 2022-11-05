import React from 'react';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import $ from 'jquery';
import '../scss/MyRawData.scss';
import MaterialTable from '../js/mycell1.js';
import MaterialTable2 from '../js/mycell2.js';
import MaterialTable3 from '../js/mycell3.js';
import MaterialTable4 from '../js/mycell4.js';
import MaterialTable5 from '../js/mycell5.js';
import MaterialTable6 from '../js/mycell6.js';

const MyData = () => {
  function showCell(val: string) {
    const num = val.charAt(val.length - 1);
    for (let i = 1; i < 7; i++) {
      if (i == Number(num)) {
        $(val).fadeIn(600);
      } else {
        $('#cell' + i).css('display', 'none');
      }
    }
  }

  return (
    <div className="middle">
      <div className="title">[My] Battery Raw Data</div>

      <div className="container">
        <div className="cell" onClick={() => showCell('#cell1')}>
          cell1
        </div>
        <div className="cell" onClick={() => showCell('#cell2')}>
          cell2
        </div>
        <div className="cell" onClick={() => showCell('#cell3')}>
          cell3
        </div>
        <div className="cell" onClick={() => showCell('#cell4')}>
          cell4
        </div>
        <div className="cell" onClick={() => showCell('#cell5')}>
          cell5
        </div>
        <div className="cell" onClick={() => showCell('#cell6')}>
          cell6
        </div>
        <input
          type="text"
          id="search"
          className="input-query"
          placeholder="원하는 시간을 입력하세요."
        />
      </div>

      <div id="cell1" className="table" style={{ display: 'show' }}>
        <MaterialTable />
      </div>
      <div id="cell2" className="table" style={{ display: 'none' }}>
        <MaterialTable2 />
      </div>
      <div id="cell3" className="table" style={{ display: 'none' }}>
        <MaterialTable3 />
      </div>
      <div id="cell4" className="table" style={{ display: 'none' }}>
        <MaterialTable4 />
      </div>
      <div id="cell5" className="table" style={{ display: 'none' }}>
        <MaterialTable5 />
      </div>
      <div id="cell6" className="table" style={{ display: 'none' }}>
        <MaterialTable6 />
      </div>
    </div>
  );
};

export default MyData;
