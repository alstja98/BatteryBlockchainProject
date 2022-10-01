import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Mainpage from './pages/Mainpage';
import Header from './components/common/Header';
import RawData from './components/app/RawData';
import MyData from './components/app/MyData';
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
          <Route path="/allrawdata" element={<RawData />} />
          <Route path={`/myrawdata`} element={<MyData />} />
          <Route path="/dataflow" element={<DataFlow />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
