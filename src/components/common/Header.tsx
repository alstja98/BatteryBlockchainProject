import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './Header.scss';
import Dropdown from './DropDown';

const Header = () => {
  //지갑 연결
  const { isAuthenticated, authenticate, user } = useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate().then(() => window.location.reload());
    }
  };

  const [address, setAddress] = useState<string>('');
  let user_tx_url =
    'https://mumbai.polygonscan.com/address/' + user?.attributes.ethAddress;
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user?.attributes.ethAddress);
      user_tx_url =
        'https://mumbai.polygonscan.com/address/' + user?.attributes.ethAddress;
    }
  }, [isAuthenticated]);

  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="logoContainer">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
              <img className="logo" src={require('../../images/logo.png')} />
              <div className="logoName">ProBat</div>
            </Link>
          </div>
          <div className="menuContainer">
            <div
              className="menu"
              onClick={e => setDropdownVisibility(!dropdownVisibility)}
            >
              배터리 데이터
              {dropdownVisibility}
              <Dropdown visibility={dropdownVisibility}>
                <ul>
                  <li>
                    <Link
                      to="/allrawdata"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      All Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myrawdata"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      My Data
                    </Link>
                  </li>
                </ul>
              </Dropdown>
            </div>
            <Link
              to="/DataFlow"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="menu">데이터 차트</div>
            </Link>
            <div
              className="menu"
              onClick={e => setDropdownVisibility2(!dropdownVisibility2)}
            >
              트랜잭션 링크
              {dropdownVisibility2}
              <Dropdown visibility={dropdownVisibility2}>
                <ul>
                  {isAuthenticated ? (
                    <li>
                      <a
                        href={user_tx_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        트랜잭션 전송 확인
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <a
                      href="https://mumbai.polygonscan.com/address/0xcddda9a4793c6d48362999c2b09fe3ce69224bc4"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      저장된 해시값 확인
                    </a>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
          <div className="walletMenu">
            {!isAuthenticated ? (
              <div className="login" onClick={login}>
                지갑 연결
              </div>
            ) : (
              <>
                <div className="walletAddress">
                  {address.substring(0, 4) +
                    '...' +
                    address.substring(address.length - 4)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
