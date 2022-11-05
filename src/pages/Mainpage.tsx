import React from 'react';
import './Mainpage.scss';

const Mainpage = () => {
  return (
      <div className="middle">
        <div className="top_Sentence">
          Battery-Blockchain Web3 Platform
        </div>
        <div className="mid1_Sentence">
          Upload Safely, Upload Smart
        </div>
        <div className="mid2_Sentence">
          On Polygon Network
        </div>
        <div className="detail">
          We will provide the tool which checks the state of your battery.<br></br>
          We can alert when it’s going on emergecy,<br></br>
          We can suggest much better management solution.<br/><br/>

          Even though our information will grow the company,<br></br>
          We protect our customers&apos; personal information until the end.<br/>
        </div>
        <div style={{margin:'0 auto', width:'100%', textAlign:'center'}}>
        <img className="main1" src={require('../images/main1.png')}/>
        <img className="main2" src={require('../images/main2.png')}/>
        <img className="main3" src={require('../images/main3.png')}/>
        </div>
      </div>
  );
};

export default Mainpage;
