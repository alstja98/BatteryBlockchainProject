import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import $ from 'jquery';
import '../scss/AllRawData.scss';
import MaterialTable from '../js/alldata.js';
import {
  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  TEST_ADDRESS,
  TEST_ABI,
} from '../../constants/constants';
import { request } from 'https';
import CsvTest from '../js/csvtest';
import Papa, { parse, ParseResult } from 'papaparse';

const AllData = () => {
  const web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK));
  const web3Ws = new Web3(
    new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER_LINK),
  );
  const [txhash, setTxhash] = useState<any>('abc');
  const [csvUrl, setCsvUrl] = useState<string>('');
  const [start, setStart] = useState<boolean>(false);

  const rowsArray: string[] = [];
  const valuesArray: string[] = [];

  const transactionWatcher = async () => {
    web3Ws.eth.subscribe(
      'logs',
      {
        address: TEST_ADDRESS,
      },
      async function (error, result) {
        if (!error) {
          allDataWatcher();
        }
      },
    );
  };

  const allDataWatcher = async () => {
    const MyContract = new web3.eth.Contract(
      TEST_ABI as AbiItem[],
      TEST_ADDRESS,
    );
    const res = await MyContract.methods.all_data().call();
    setCsvUrl('https://gateway.pinata.cloud/ipfs/' + res['0'][0].slice(-1));
  };

  // State to store parsed data
  const [parsedData, setParsedData] = useState<any[]>([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState<any[]>([]);

  //State to store the values
  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    const res = changeHandler(csvUrl, rowsArray, valuesArray);
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
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
        setStart(true);
      },
    });
  };

  allDataWatcher();
  transactionWatcher();

  return (
    <div className="middle">
      <div className="title">[All] Battery Raw Data</div>

      <div className="container">
        <input
          type="text"
          id="search"
          className="input-query"
          placeholder="원하는 시간을 입력하세요."
        />
      </div>
      {start ? (
        <div className="table">
          <div>
            <br />
            {/* Table */}
            <table>
              <thead>
                <tr>
                  {tableRows.map((rows, index) => {
                    return <th key={index}>{rows}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {values.map((value, index) => {
                  return (
                    <tr key={index}>
                      {value.map((val: any, i: any) => {
                        return <td key={i}>{val}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        'wait...'
      )}
    </div>
  );
};

export default AllData;
