import Web3 from 'web3';
import request from 'request';
import React from 'react';
import { useState } from 'react';

import {
  TEST_ABI,
  TEST_ADDRESS,
  NETWORK,
  PROJECT_ID,
  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  PINATA_JWT,
  PINATA_KEY,
  PINATA_Secret,
  PINATA_URL,
  PRIVATE_KEY,
  USER_ADDRESS,
} from '../../constants/constants';

const web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER_LINK));
const web3Ws = new Web3(
  new Web3.providers.WebsocketProvider(WEBSOCKET_PROVIDER_LINK),
);

const transactionWatcher = async () => {
  web3Ws.eth
    .subscribe(
      'logs',
      {
        address: TEST_ADDRESS,
      },
      async function (error, result) {
        if (!error) {
          request.get(
            'https://gateway.pinata.cloud/ipfs/bafkreid5vflvtngpb3i2ed3iuvkqxcu3gbrjyum5rc5y2kpyiwx3ud7az4',
            function (error, response, body) {
              if (!error && response.statusCode == 200) {
                var csv = body;
                // Continue with your processing here.
              }
            },
          );

          console.log(result);
        }
      },
    )
    .on('connected', subscriptionId => {
      console.log('connected');
    })
    .on('data', log => {
      console.log(log);
    })
    .on('changed', log => {
      console.log('changed');
    });
};

export default transactionWatcher;
