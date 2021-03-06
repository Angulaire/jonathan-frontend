import React from 'react';
import Link from 'next/link';
import Logo from '../global/Logo';
import Nav from './Nav';
import styled from '@emotion/styled';

const HeaderGroup = styled.header`
  @media only screen and (min-width: 768px) { 
    padding: 40px 140px 0;
  }
  padding: 0 20px;
  background: transparent;
  width: 100%;
  height: 80px;
  z-index: 100;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

type HeaderProps = { 
  navbar: any;
}

const Header = ({ navbar }: HeaderProps) => {
  return (     
    <HeaderGroup >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Nav
        navbar={navbar}
        showNav
      />
    </HeaderGroup>
  )
}

export default Header;