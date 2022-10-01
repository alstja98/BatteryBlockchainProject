import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="e2mXbIzrapLRqHYRONU7nU5kF0daG0oLpjavjr8m"
      serverUrl="https://mkfloknpttzk.usemoralis.com:2053/server"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
);

reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <MoralisProvider
//       appId="e2mXbIzrapLRqHYRONU7nU5kF0daG0oLpjavjr8m"
//       serverUrl="https://mkfloknpttzk.usemoralis.com:2053/server"
//     >
//       <NotificationProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </NotificationProvider>
//     </MoralisProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
