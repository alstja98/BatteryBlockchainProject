import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Mainpage from './pages/Mainpage';
import Header from './components/common/Header';
import AllRawData from './components/app/AllRawData';
import MyRawData from './components/app/MyRawData';
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
          <Route path="/allrawdata" element={<AllRawData />} />
          <Route path={`/myrawdata`} element={<MyRawData />} />
          <Route path="/dataflow" element={<DataFlow />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
