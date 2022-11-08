import React, { useState, useEffect, useRef } from 'react';
import { AbiItem } from 'web3-utils';
import $ from 'jquery';
import '../scss/MyRawData.scss';
import MaterialTable from '../js/mycell1.jsx';
import MaterialTable2 from '../js/mycell2.js';
import MaterialTable3 from '../js/mycell3.js';
import MaterialTable4 from '../js/mycell4.js';
import MaterialTable5 from '../js/mycell5.js';
import MaterialTable6 from '../js/mycell6.js';
import Papa, { parse, ParseResult } from 'papaparse';
import { TEST_ADDRESS, TEST_ABI } from '../../constants/constants';

const rowsArray: string[] = [];
const valuesArray: string[][] = [];

const MyData = (prop: any) => {
  const web3 = prop.http;
  const web3Ws = prop.ws;
  const MyContract = prop.contract;

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
  const [txhash, setTxhash] = useState<any>('');
  const [csvUrl, setCsvUrl] = useState<string>('');
  const [start, setStart] = useState<boolean>(false);

  const tableRef = useRef();

  const transactionWatcher = async () => {
    web3Ws.eth.subscribe(
      'logs',
      {
        address: TEST_ADDRESS,
      },
      async function (error: any, result: any) {
        if (!error) {
          allDataWatcher();
        }
      },
    );
  };

  const allDataWatcher = async () => {
    const res = await MyContract.methods.all_data().call();
    setCsvUrl('https://gateway.pinata.cloud/ipfs/' + res['0'][0].slice(-1));
  };

  // State to store parsed data
  const [parsedData, setParsedData] = useState<any[]>([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState<any[]>([]);

  //State to store the values
  const [values, setValues] = useState<any[]>();

  // for (let i = 0; i < valuesArray.length; i++) {
  //   valuesArray[i] = new Array(6);
  // }

  useEffect(() => {
    if (csvUrl.length > 10) {
      const res = changeHandler(csvUrl, rowsArray, valuesArray);
    }
  }, [csvUrl]);

  const changeHandler = (url: string, rowsArray: any[], valuesArray: any[]) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    return Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results: ParseResult<Record<string, unknown>>) {
        // Iterating data to get column name and their values
        results?.data?.map(d => {
          rowsArray?.push(Object.keys(d));
          // valuesArray?.push(Object.values(d));
          const tmp_values = [
            Object.values(d)[2],
            Object.values(d)[3],
            Object.values(d)[4],
            Object.values(d)[5],
            Object.values(d)[6],
            Object.values(d)[7],
          ];
          if (!valuesArray[Object.values(d)[1] as number]) {
            valuesArray[Object.values(d)[1] as number] = [tmp_values];
          } else {
            valuesArray[Object.values(d)[1] as number]?.push(tmp_values);
          }
        });
        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
        // setValues(values?.concat(valuesArray));
        setStart(true);
      },
    });
  };
  allDataWatcher();
  // transactionWatcher();

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
      {/* <div>
        {valuesArray.map(value => (
          <div
            id={value[0]}
            className="table"
            style={{ display: 'show' }}
            key={value[0]}
          >
            <MaterialTable data={value} />
          </div>
        ))}
      </div> */}
      {typeof values === 'object' ? (
        <>
          <div id="cell1" className="table" style={{ display: 'show' }}>
            <MaterialTable data={values[1]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
      {typeof values === 'object' ? (
        <>
          <div id="cell2" className="table" style={{ display: 'none' }}>
            <MaterialTable data={values[2]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
      {typeof values === 'object' ? (
        <>
          <div id="cell3" className="table" style={{ display: 'none' }}>
            <MaterialTable data={values[3]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
      {typeof values === 'object' ? (
        <>
          <div id="cell4" className="table" style={{ display: 'none' }}>
            <MaterialTable data={values[4]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
      {typeof values === 'object' ? (
        <>
          <div id="cell5" className="table" style={{ display: 'none' }}>
            <MaterialTable data={values[5]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
      {typeof values === 'object' ? (
        <>
          <div id="cell6" className="table" style={{ display: 'none' }}>
            <MaterialTable data={values[6]} tableRef={tableRef} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyData;
