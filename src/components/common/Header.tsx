import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenu, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

  const dataToggleMenu = () => {
    setMenu(isMenu => !isMenu); // on,off 개념 boolean
  };
  return (
    <>
      <div>
        <div className="logoContainer">
          <Link to="/">
            <img src="" />
          </Link>
        </div>
        <div className="menuContainer">
          <div className="rawDataMenu" onClick={dataToggleMenu}>
            alldata
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
