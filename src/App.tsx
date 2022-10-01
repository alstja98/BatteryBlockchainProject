import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Mainpage from './pages/Mainpage';
import Header from './components/common/Header';
import RawData from './components/app/AllRawData';
import MyData from './components/app/MyRawData';
import DataFlow from './components/app/DataFlow';

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <Header />
      </header>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/rawdata" element={<RawData />} />
          <Route path={`/mydata`} element={<MyData />} />
          <Route path="/dataflow" element={<DataFlow />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
