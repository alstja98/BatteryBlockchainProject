import React, { useEffect, useState, createContext, useRef } from 'react';
import { AbiItem } from 'web3-utils';
import '../scss/AllRawData.scss';
import MaterialTable from '../js/alldata.jsx';
import { TEST_ADDRESS, TEST_ABI } from '../../constants/constants';
import Papa, { parse, ParseResult } from 'papaparse';
import timeConvertor from '../../function/timeConvertor';

type allDataType = {
  Wallet: string;
  Cell_No: number;
  Cell_Voltages: number;
  Pack_Voltage: number;
  Pack_Current: number;
  Vout_Chgr: number;
  Cell_Temperatures: number;
  Upload_Date: Date;
};

const rowsArray: string[] = [];
const valuesArray: string[] = [];

const AllData = (prop: any) => {
  const web3 = prop.http;
  const web3Ws = prop.ws;
  const MyContract = prop.contract;
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

  // const allDataWatcher = async () => {
  //   const res = await MyContract.methods.my_data().call();
  //   setCsvUrl('https://gateway.pinata.cloud/ipfs/' + res['0'][0].slice(-1));
  //   alert(csvUrl);
  // };
  const allDataWatcher = async () => {
    const res = await MyContract.methods.all_data().call();
    setCsvUrl('https://gateway.pinata.cloud/ipfs/' + res['0'][0].slice(-1));
    // alert('url' + csvUrl);
  };

  // State to store parsed data
  const [parsedData, setParsedData] = useState<any[]>([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState<any[]>([]);

  //State to store the values
  const [values, setValues] = useState<any[]>();

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
          valuesArray?.push(Object.values(d));
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
      <div className="title">[All] Battery Raw Data</div>

      <div className="container">
        <input
          type="text"
          id="search"
          className="input-query"
          placeholder="원하는 시간을 입력하세요."
        />
      </div>

      <div className="table">
        {typeof values === 'object' ? (
          <div>
            <MaterialTable tableRef={tableRef} data={values} />
          </div>
        ) : (
          'wait...'
        )}
      </div>
    </div>
  );
};

export default AllData;
