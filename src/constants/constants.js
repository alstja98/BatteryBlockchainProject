const TEST_ADDRESS = '0x78311Bb3C9a6adFEe5df8c77da64c0995e110D98';
const TEST_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'milestone',
        type: 'uint256',
      },
    ],
    name: '_check',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_addressCount',
        type: 'uint256',
      },
    ],
    name: '_write',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
    ],
    name: 'write',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'all_data',
    outputs: [
      {
        internalType: 'string[][]',
        name: '',
        type: 'string[][]',
      },
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_address_count',
    outputs: [
      {
        internalType: 'uint256',
        name: 'count',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_addresses',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'my_data',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
const NETWORK = 'polygon-mumbai';
const PROJECT_ID = 'D86CLmqd2U0WgfIdZ5uBX_mefM9NafPj';
const HTTP_PROVIDER_LINK =
  'https://polygon-mumbai.g.alchemy.com/v2/D86CLmqd2U0WgfIdZ5uBX_mefM9NafPj';
const WEBSOCKET_PROVIDER_LINK =
  'wss://polygon-mumbai.g.alchemy.com/v2/D86CLmqd2U0WgfIdZ5uBX_mefM9NafPj';
const PINATA_KEY = '07ca8be72d065d7d4269';
const PINATA_Secret =
  'f97aa5472acf6bec49d713829a12cd31bf4246dbee5170aa2391e48d52066b02';
const PINATA_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiMzBmOTE5OC02ZDgyLTQ0ZjEtOTgwYi03NjQwMmUzYWE5N2IiLCJlbWFpbCI6InRuc3FqYWhvbmdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA3Y2E4YmU3MmQwNjVkN2Q0MjY5Iiwic2NvcGVkS2V5U2VjcmV0IjoiZjk3YWE1NDcyYWNmNmJlYzQ5ZDcxMzgyOWExMmNkMzFiZjQyNDZkYmVlNTE3MGFhMjM5MWU0OGQ1MjA2NmIwMiIsImlhdCI6MTY2NzEwNzg0NX0.kNnz4kbTJUUxb_hSDR-7ge8XzK9DOtIz2upGu9p_38U';
const PINATA_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const PRIVATE_KEY =
  '456e9560f3fd8d21483e96334387fafa854ba8369179dbf70d5e10afcdccedad';
const USER_ADDRESS = '0xe441bdDc454A1909de4b3fe0Eb7Ac18BA8703076';

module.exports = Object.freeze({
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
});
