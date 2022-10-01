import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './Header.scss';
import Dropdown from './DropDown';

const Header = () => {
  const { isAuthenticated, authenticate, user } = useMoralis();
  const login = async () => {
    if (!isAuthenticated) {
      await authenticate().then(() => window.location.reload());
    }
  };

  const [address, setAddress] = useState<string>('');
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user?.attributes.ethAddress);
    }
  }, [isAuthenticated]);

  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  return (
    <>
      <div className="header">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={require('../../images/testLogo.png')} />
          </Link>
        </div>
        <div className="menuContainer">
          <div
            className="menu"
            onClick={e => setDropdownVisibility(!dropdownVisibility)}
          >
            raw data
            {dropdownVisibility}
            <Dropdown visibility={dropdownVisibility}>
              <ul>
                <li>
                  <Link to="/allrawdata">allrawdata</Link>
                </li>
                <li>
                  <Link to="/myrawdata">myrawdata</Link>
                </li>
              </ul>
            </Dropdown>
          </div>
          <div className="menu">dataflow</div>
          <div className="menu">transaction</div>
        </div>
        <div className="walletMenu">
          {!isAuthenticated ? (
            <div className="login" onClick={login}>
              Wallet Connect
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
    </>
  );
};

export default Header;
