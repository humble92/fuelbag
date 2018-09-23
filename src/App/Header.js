import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { set as setPage } from '../redux/page/set'
import {
  HOME,
  CHARITY,
  MENTORS,
} from '../pages.js'
import Logo from './Logo'

const MenuItem = styled.div`
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`

const Header = ({
  onSetPage,
}) => (
  <div style={{
    backgroundColor: '#40E9F1',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 50,
  }}>
    <div style={{
      paddingLeft: 20,
    }}>
      <Logo />
    </div>
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}>
      <MenuItem onClick={() => onSetPage(HOME)}>Home</MenuItem>
      <MenuItem onClick={() => onSetPage(CHARITY)}>Charity organizations</MenuItem>
      <MenuItem onClick={() => onSetPage(MENTORS)}>Mentors</MenuItem>
    </div>
  </div>
)

export default connect(null, {
  onSetPage: setPage,
})(Header)
