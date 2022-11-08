import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Mainpage from './pages/Mainpage';
import Header from './components/common/Header';
import Header2 from './components/common/Header2';
import AllRawData from './components/app/AllRawData';
import MyRawData from './components/app/MyRawData';
import DataFlow from './components/app/DataFlow';
import { BrowserView, MobileView } from 'react-device-detect';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import {
  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  TEST_ADDRESS,
  TEST_ABI,
} from './constants/constants';

function App() {
  const web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK));
  const web3Ws = new Web3(
    new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER_LINK),
  );

  const MyContract = new web3.eth.Contract(TEST_ABI as AbiItem[], TEST_ADDRESS);
  return (
    <div className="App">
      <BrowserView>
        <header className="headerContainer">
          <Header />
        </header>
      </BrowserView>
      <MobileView>
        <header className="headerContainer2">
          <Header2 />
        </header>
      </MobileView>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route
            path="/allrawdata"
            element={
              <AllRawData http={web3} ws={web3Ws} contract={MyContract} />
            }
          />
          <Route
            path={`/myrawdata`}
            element={
              <MyRawData http={web3} ws={web3Ws} contract={MyContract} />
            }
          />
          <Route path="/dataflow" element={<DataFlow />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
