import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import './Header2.css';
import Dropdown from './DropDown';


const Header2 = () => {
    //toggle 메뉴 구성
    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    //지갑 연결 
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
    const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
    return (
        <>
            <div className="header2">
                <ul className="header-wrapper2">
                    <li ><img className="menuicon" src={require('../../images/menuicon.png')} onClick={() => toggleMenu()}></img></li>
                    <li>
                        <Link to="/" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginRight:'20px'}}>
                            <img className="logo2" src={require('../../images/logo.png')} />
                            <div className="logoName2">ProBat</div>
                        </Link>
                    </li>
                    <li>
                        <div className="walletMenu2">
                            {!isAuthenticated ? (
                                <div className="login" onClick={login}>
                                    지갑 연결
                                </div>
                            ) : (
                                <>
                                    <div className="walletAddress2">
                                        {address.substring(0, 4) +
                                            '...' +
                                            address.substring(address.length - 4)}
                                    </div>
                                </>
                            )}
                        </div>
                    </li>

                </ul>
                <ul className={isOpen ? "show-menu" : "hide-menu"} style={{listStyle:'none'}}>
                    <li >
                        <div className="menu2" >
                            배터리 데이터
                                <ul>
                                    <li>
                                        <Link to="/allrawdata" onClick={() => toggleMenu()} style={{ textDecoration: 'none', color: 'black' }}>All Data</Link>
                                    </li>
                                    <li>
                                        <Link to="/myrawdata" onClick={() => toggleMenu()} style={{ textDecoration: 'none', color: 'black' }}>My Data</Link>
                                    </li>
                                </ul>
                        </div>
                    </li>
                    <li >
                        <Link to="/DataFlow" onClick={() => toggleMenu()} style={{ textDecoration: 'none', color: 'black' }}><div className="menu2">데이터 차트</div></Link>
                    </li>
                    <li><div className='menu2'>
                        트랜잭션 링크
                            <ul>
                                <li style={{padding:'4px 0'}}>
                                    <a href="https://mumbai.polygonscan.com/address/0xe441bdDc454A1909de4b3fe0Eb7Ac18BA8703076" target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'black' }}>트랜잭션 전송 확인</a>
                                </li>
                                <li style={{padding:'4px 0'}}>
                                    <a href="https://mumbai.polygonscan.com/address/0xcddda9a4793c6d48362999c2b09fe3ce69224bc4" target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'black' }}>저장된 해시값 확인</a>
                                </li>
                            </ul>
                    </div></li>
                </ul>
            </div>
        </>
    );
};

export default Header2;
